"use strict";
function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
}
exports.clamp = clamp;
function clampParams(params) {
    return {
        seed: clamp((params.seed || 0), 0, 1024),
        value: clamp((params.value || 0), 0, 255),
        amount: clamp(params.amount || 0, 0, 1024)
    };
}
exports.clampParams = clampParams;
//# sourceMappingURL=utils.js.map