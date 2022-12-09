export default function Validation(ensemble) {
  let errorValidationArray = [];

  ensemble.posts.forEach((post) => {
    if (!post.title != "") {
      errorValidationArray.push("Title is required");
    }

    if (!post.title.match(/[0-9A-ZÆØÅ]|[0-9a-zæøå]\w+/g)) {
      errorValidationArray.push("Title must be letters or numbers only");
    }

    if (!post.description.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
      errorValidationArray.push(
        "Description must begin with a capitalized letter or a number!"
      );
    }

    if (!post.instrument != "") {
      errorValidationArray.push("Instrument is required");
    }

    if (!post.minimumSkillLevel != "") {
      errorValidationArray.push("Minimum Skill Level is required");
    }
  });

  // if length er 0, så´er der ingen fejl
  return errorValidationArray;
}
