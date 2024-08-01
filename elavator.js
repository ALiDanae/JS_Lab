function absolut(a) {
    const num = Number(a)
    if (num < 0) {
        abso = num * -1
    } else {
        abso = num
    }
    return abso
}

function evalator(left, right, call) {
    const left_to_me = absolut(left - call);
    const right_to_me = absolut(right - call);

    if (right_to_me < left_to_me) {
        return "go with right"
    }
    if (left_to_me < right_to_me) {
        return "go with left"
    }
    if (right_to_me == left_to_me) {
        return "no difrent"
    }
}