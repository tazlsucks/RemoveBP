    if (window.location.href.includes("/?bp")) {
      try {
        const newUrl = window.location.href.replace(/\/\?bp.*/, "");
        window.location.href = newUrl;
      } catch{}};