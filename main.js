
    let columns = document.querySelectorAll(".column");


    // column - 1

    if (columns.length == 1) {
      columns.forEach((e) => {
        e.style.width = 100 + "%";
      });
    }

    // column - 2

    if (columns.length == 2) {
      columns.forEach((e) => {
        e.style.width = 50 + "%";
      });
      if (window.innerWidth < 960) {
        columns.forEach((e) => {
          e.style.width = 50 + "%";
        });
      }
      if (window.innerWidth < 768) {
        columns.forEach((e) => {
          e.style.width = 100 + "%";
        });
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth > 960) {
          columns.forEach((e) => {
            e.style.width = 50 + "%";
          });
        }
        if (window.innerWidth < 960) {
          columns.forEach((e) => {
            e.style.width = 50 + "%";
          });
        }
        if (window.innerWidth < 768) {
          columns.forEach((e) => {
            e.style.width = 100 + "%";
          });
        }
      });
    }
    // column - 3

    if (columns.length == 3) {
      columns.forEach((e) => {
        e.style.width = 33.33 + "%";
      });
      if (window.innerWidth < 960) {
        columns.forEach((e) => {
          e.style.width = 50 + "%";
        });
      }
      if (window.innerWidth < 768) {
        columns.forEach((e) => {
          e.style.width = 100 + "%";
        });
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth > 960) {
          columns.forEach((e) => {
            e.style.width = 33.33 + "%";
          });
        }
        if (window.innerWidth < 960) {
          columns.forEach((e) => {
            e.style.width = 50 + "%";
          });
        }
        if (window.innerWidth < 768) {
          columns.forEach((e) => {
            e.style.width = 100 + "%";
          });
        }
      });
    }
    // column - 4

    if (columns.length == 4) {
      columns.forEach((e) => {
        e.style.width = 25 + "%";
      });
      if (window.innerWidth < 960) {
        columns.forEach((e) => {
          e.style.width = 50 + "%";
        });
      }
      if (window.innerWidth < 768) {
        columns.forEach((e) => {
          e.style.width = 100 + "%";
        });
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth > 960) {
          columns.forEach((e) => {
            e.style.width = 25 + "%";
          });
        }
        if (window.innerWidth < 960) {
          columns.forEach((e) => {
            e.style.width = 50 + "%";
          });
        }
        if (window.innerWidth < 768) {
          columns.forEach((e) => {
            e.style.width = 100 + "%";
          });
        }
      });
    }
    // column - 5

    if (columns.length == 5) {
      columns.forEach((e) => {
        e.style.width = 20 + "%";
      });
      if (window.innerWidth < 960) {
        columns.forEach((e) => {
          e.style.width = 50 + "%";
        });
      }
      if (window.innerWidth < 768) {
        columns.forEach((e) => {
          e.style.width = 100 + "%";
        });
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth > 960) {
          columns.forEach((e) => {
            e.style.width = 20 + "%";
          });
        }
        if (window.innerWidth < 960) {
          columns.forEach((e) => {
            e.style.width = 50 + "%";
          });
        }
        if (window.innerWidth < 768) {
          columns.forEach((e) => {
            e.style.width = 100 + "%";
          });
        }
      });
    }
    // column - 6

    if (columns.length == 6) {
      columns.forEach((e) => {
        e.style.width = 16.66 + "%";
      });
      if (window.innerWidth < 960) {
        columns.forEach((e) => {
          e.style.width = 50 + "%";
        });
      }
      if (window.innerWidth < 768) {
        columns.forEach((e) => {
          e.style.width = 100 + "%";
        });
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth > 960) {
          columns.forEach((e) => {
            e.style.width = 16.66 + "%";
          });
        }
        if (window.innerWidth < 960) {
          columns.forEach((e) => {
            e.style.width = 50 + "%";
          });
        }
        if (window.innerWidth < 768) {
          columns.forEach((e) => {
            e.style.width = 100 + "%";
          });
        }
      });
    }
    // column - 7

    if (columns.length == 7) {
      columns.forEach((e) => {
        e.style.width = 14.28 + "%";
      });
      if (window.innerWidth < 960) {
        columns.forEach((e) => {
          e.style.width = 50 + "%";
        });
      }
      if (window.innerWidth < 768) {
        columns.forEach((e) => {
          e.style.width = 100 + "%";
        });
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth > 960) {
          columns.forEach((e) => {
            e.style.width = 14.28 + "%";
          });
        }
        if (window.innerWidth < 960) {
          columns.forEach((e) => {
            e.style.width = 50 + "%";
          });
        }
        if (window.innerWidth < 768) {
          columns.forEach((e) => {
            e.style.width = 100 + "%";
          });
        }
      });
    }
    // column - 8

    if (columns.length == 8) {
      columns.forEach((e) => {
        e.style.width = 12.5 + "%";
      });
      if (window.innerWidth < 960) {
        columns.forEach((e) => {
          e.style.width = 50 + "%";
        });
      }
      if (window.innerWidth < 768) {
        columns.forEach((e) => {
          e.style.width = 100 + "%";
        });
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth > 960) {
          columns.forEach((e) => {
            e.style.width = 12.5 + "%";
          });
        }
        if (window.innerWidth < 960) {
          columns.forEach((e) => {
            e.style.width = 50 + "%";
          });
        }
        if (window.innerWidth < 768) {
          columns.forEach((e) => {
            e.style.width = 100 + "%";
          });
        }
      });
    }
    // column - 9

    if (columns.length == 9) {
      columns.forEach((e) => {
        e.style.width = 11.11 + "%";
      });
      if (window.innerWidth < 960) {
        columns.forEach((e) => {
          e.style.width = 50 + "%";
        });
      }
      if (window.innerWidth < 768) {
        columns.forEach((e) => {
          e.style.width = 100 + "%";
        });
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth > 960) {
          columns.forEach((e) => {
            e.style.width = 11.11 + "%";
          });
        }
        if (window.innerWidth < 960) {
          columns.forEach((e) => {
            e.style.width = 50 + "%";
          });
        }
        if (window.innerWidth < 768) {
          columns.forEach((e) => {
            e.style.width = 100 + "%";
          });
        }
      });
    }
    // column - 10

    if (columns.length == 10) {
      columns.forEach((e) => {
        e.style.width = 10 + "%";
      });
      if (window.innerWidth < 960) {
        columns.forEach((e) => {
          e.style.width = 50 + "%";
        });
      }
      if (window.innerWidth < 768) {
        columns.forEach((e) => {
          e.style.width = 100 + "%";
        });
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth > 960) {
          columns.forEach((e) => {
            e.style.width = 10 + "%";
          });
        }
        if (window.innerWidth < 960) {
          columns.forEach((e) => {
            e.style.width = 50 + "%";
          });
        }
        if (window.innerWidth < 768) {
          columns.forEach((e) => {
            e.style.width = 100 + "%";
          });
        }
      });
    }
    // column - 11

    if (columns.length == 11) {
      columns.forEach((e) => {
        e.style.width = 9.09 + "%";
      });
      if (window.innerWidth < 960) {
        columns.forEach((e) => {
          e.style.width = 50 + "%";
        });
      }
      if (window.innerWidth < 768) {
        columns.forEach((e) => {
          e.style.width = 100 + "%";
        });
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth > 960) {
          columns.forEach((e) => {
            e.style.width = 9.09 + "%";
          });
        }
        if (window.innerWidth < 960) {
          columns.forEach((e) => {
            e.style.width = 50 + "%";
          });
        }
        if (window.innerWidth < 768) {
          columns.forEach((e) => {
            e.style.width = 100 + "%";
          });
        }
      });
    }
    // column - 12

    if (columns.length == 12) {
      columns.forEach((e) => {
        e.style.width = 8.33 + "%";
      });
      if (window.innerWidth < 960) {
        columns.forEach((e) => {
          e.style.width = 50 + "%";
        });
      }
      if (window.innerWidth < 768) {
        columns.forEach((e) => {
          e.style.width = 100 + "%";
        });
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth > 960) {
          columns.forEach((e) => {
            e.style.width = 8.33 + "%";
          });
        }
        if (window.innerWidth < 960) {
          columns.forEach((e) => {
            e.style.width = 50 + "%";
          });
        }
        if (window.innerWidth < 768) {
          columns.forEach((e) => {
            e.style.width = 100 + "%";
          });
        }
      });
    }