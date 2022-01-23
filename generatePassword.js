
const bcrypt = require("bcrypt");

(async () => {
    const salt = await bcrypt.genSalt(15);
    console.log(await bcrypt.hash("123", salt));
})();