      if (
        window.location.hash.includes("invite_token") ||
        window.location.hash.includes("confirmation_token") ||
        window.location.hash.includes("recovery_token")
      ) {
        const hash = window.location.hash;
        if (!window.location.pathname.includes("/admin/")) {
          window.location.href = "/admin/" + hash;
        }
      }
      
    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", (user) => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });

        window.netlifyIdentity.init();
      }