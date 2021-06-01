function update_github() {
    for (const span of document.getElementsByClassName("github-stars")) {
        const repo = span.getAttribute("data-repo");
        const xhr = new XMLHttpRequest();
        xhr.open('GET', "https://api.github.com/repos/" + repo);
        xhr.addEventListener("load", () => {
            const json = JSON.parse(xhr.responseText);
            let stargazers_count = json.stargazers_count;
            if (stargazers_count === undefined) {
                const item = localStorage.getItem("stargazers_count_" + repo);
                if (item) {
                    stargazers_count = item;
                }
                else {
                    stargazers_count = "?";
                }
            }
            else {
                stargazers_count = stargazers_count.toString();
                try {
                    localStorage.setItem("stargazers_count_" + repo, stargazers_count);
                } catch {}
            }
            while (span.firstChild) span.removeChild(span.firstChild);
            span.appendChild(document.createTextNode(stargazers_count));
        });
        xhr.send();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("readystatechange", update_github);
}
else {
    update_github();
}
