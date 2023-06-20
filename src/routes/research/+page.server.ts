export const load = async ({ fetch}: { fetch: any }) => {
    try {
        const res = await fetch(`http://127.0.0.1:1337/api/research-areas-count`);
        const json = await res.json();

        if (res.ok) {
            return {
                data: json
            };
        } else {
            console.log("Error")
            throw new Error(json);
        }
    } catch (e) {
        console.log("Error")
        throw e;
    }
};
