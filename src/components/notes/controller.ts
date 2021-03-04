import { Request } from "express";

const TABLA = 'notes';

export default function (injectedStore) {
  const store = injectedStore;

  async function list() {
    const notes = await store.list(TABLA);
    return notes;
  }

  async function upsert({ body }: Request) {
    const note: Note = {
      title: body.title,
      content: body.content,
    }

    if (body.id) {
      note.id = body.id
      note.updated_at = new Date()
    }

    return store.upsert(TABLA, note);
  }

  return {
    list,
    upsert
  }
}

type Note = {
  id?: number,
  title: string,
  content: string,
  updated_at?: Date
}