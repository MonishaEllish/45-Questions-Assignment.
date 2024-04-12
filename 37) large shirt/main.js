function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love typescript"; }
    console.log(" creating a ".concat(size, " shirt with a message: ").concat(text));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love python");
