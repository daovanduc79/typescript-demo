async function f() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    // wait till the promise resolves (*)
    const result = await promise;
    console.log(result); // "done!"
}
async function main() {
    console.log('lay du lieu');
    await f().then();
    console.log('hien thi ket qua');
}

main();