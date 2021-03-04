export default function (_injectedStore: any) {
    async function greet() {

        return 'Hello World!';
    }

    return {
        greet,
    };
}