export const clickAnimation = {
    "0%": {
        transform: "scale(1)"
    },
    "50%": {
        transform: "scale(0.95)"
    },
    "100%": {
        transform: "scale(1)"
    }
}

export const starsAppear = {
    "0%": {
        opacity: 0
    },
    "100%": {
        opacity: 1
    }
}

export const zoomIn = {
    "0%": {
        opacity: 0,
        transform: "scale(0)"
    },
    "100%": {
        opacity: 1,
        transform: "scale(1)"
    }
}

export const zoomOut = {
    "0%": {
        opacity: 1,
        transform: "scale(1)"
    },
    "100%": {
        opacity: 0,
        transform: "scale(0)"
    }
}

export const imageContainerLoading = {
    "0%": {
        backgroundColor: "#e0e0e0"
    },
    "50%": {
        backgroundColor: "#eeeeee",
    },
    "100%": {
        backgroundColor: "#e0e0e0"
    }
}

export const fadeInLeftBig = {
    "from": {
        opacity: 0,
        transform: "translate3d(-100%, 0, 0)"
    },
    "to": {
        opacity: 1,
        transform: "translate3d(0, 0, 0)"
    }
}

export const fadeInRightBig = {
    "from": {
        opacity: 0,
        transform: "translate3d(100%, 0, 0)"
    },
    "to": {
        opacity: 1,
        transform: "translate3d(0, 0, 0)"
    }
}

export const fadeInRight = {
    "0%": {
        opacity: 0,
        transform: "translateX(1000px)",
    },
    "100%": {
        opacity: 1,
        transform: "translateX(0)",
    }
}

export const shutterOutHorizontal = {
    "from": {
        left: "50%",
        right: "50%"
    },
    "to": {
        left: "0",
        right: "0"
    }
}

export const shutterOutHorizontalReverse = {
    "from": {
        left: "0",
        right: "0"
    },
    "to": {
        left: "50%",
        right: "50%"
    }
}

export const tada = {
    "from": {
        transform: "scale3d(1, 1, 1)"
    },
    "10%,20%": {
        transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"
    },
    "30%,50%,70%,90%": {
        transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
    },
    "40%,60%,80%": {
        transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
    },
    "to": {
        transform: "scale3d(1, 1, 1)"
    }
}

export const heartBeat = {
    "0%": {
        transform: "scale(1)"
    },
    "14%": {
        transform: "scale(1.08)"
    },
    "28%": {
        transform: "scale(1)"
    },
    "42%": {
        transform: "scale(1.08)"
    },
    "70%": {
        transform: "scale(1)"
    }
}

export const click = {
    "0%": {
        transform: "scale(1)"
    },
    "50%": {
        transform: "scale(0.95)"
    },
    "100%": {
        transform: "scale(1)"
    }
}

export const jumpCardClick = {
    "0%": {
        transform: "scale(1)"
    },
    "50%": {
        transform: "scale(0.8)"
    },
    "100%": {
        transform: "scale(1)"
    }
}

export const clickSingleOption = {
    "0%": {
        transform: "scale(1)"
    },
    "50%": {
        transform: "scale(0.975)"
    },
    "100%": {
        transform: "scale(1)"
    }
}

export const fadeInDown = {
    "0%": {
        opacity: 0,
        transform: "translateY(-200px)"
    },
    "100%": {
        opacity: 1,
        transform: "translateY(0)"
    }
}

export const clickMultipleOptionSelected = {
    "0%": {
        backgroundSize: "0px 0px",
        backgroundPositionX: "calc(100% - 12px)"
    },
    "100%": {
        backgroundSize: "24px 24px",
        backgroundPositionX: "100%"
    }
}

export const clickMultipleOptionUnselected = {
    "0%": {
        backgroundSize: "0px 0px",
        backgroundPositionX: "calc(100% - 12px)"
    },
    "100%": {
        backgroundSize: "24px 24px",
        backgroundPositionX: "100%"
    }
}