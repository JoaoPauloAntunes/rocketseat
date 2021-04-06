module.exports = {
    getFlagValue(flag) {
        // way 1
        /* const argvList = process.argv;

        for (let i = 0; i < argvList.length; i++) {
            const item = argvList[i];
            if (item == flag) {
                return argvList[i + 1];
            }
        }

        return null; */

        // way 2
        const index = process.argv.indexOf(flag) + 1;
        return process.argv[index];
    },
};