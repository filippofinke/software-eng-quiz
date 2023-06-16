async function getLatestRelease() {
  let response = await fetch(
    "https://api.github.com/repos/filippofinke/software-eng-quiz/releases/latest"
  );

  let json = await response.json();

  return json;
}

export { getLatestRelease };
