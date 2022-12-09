const profile = {
  firstName: "Jens",
  lastName: "Svensen",
  email: "JensSvensen@gmail.com",
  password: "69696969",
  status: true,
  conditions: true,
  newsletter: true,
  description: "Hej jeg hedder Jens og jeg spiller på instrument",
  zipCode: "5000",
  city: "Londong",
  phone: "13333337",
  instruments: [
    {
      instrumentName: "Clarinet",
      skillLevel: "1337",
      genre: ["The Sounds of the Universe itself"],
    },
  ],
};

// Create
if (profile.firstName != "") {
  console.log("Correct");
} else {
  console.log("First name is required!");
}

if (profile.firstName.match(/[A-ZÆØÅ]|[a-zÆØÅ]\w+/g)) {
  console.log("Correct");
} else {
  console.log("First name must be letters only!");
}

if (profile.firstName.match(/^[A-ZÆØÅ]/g)) {
  console.log("Correct");
} else {
  console.log("First name must be capitalized!");
}

if (profile.lastName != "") {
  console.log("Correct");
} else {
  console.log("Last name is required!");
}

if (profile.lastName.match(/[A-ZÆØÅ]|[a-zæøå]\w+/g)) {
  console.log("Correct");
} else {
  console.log("Last name must be letters only!");
}

if (profile.lastName.match(/^[A-ZÆØÅ]/g)) {
  console.log("Correct");
} else {
  console.log("Last name must be capitalized!");
}

if (profile.email != "") {
  console.log("Correct");
} else {
  console.log("Email is required!");
}

if (profile.email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g)) {
  console.log("Correct");
} else {
  console.log("Email must be a valid Email!");
}

if (profile.password.length >= 8) {
  console.log("Correct");
} else {
  console.log("Password must at least be 8 chars long!");
}

//Update

if (profile.description.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
  console.log("Correct");
} else {
  console.log("Description must begin with a capitalized letter or a number!");
}

if (profile.zipCode.match(/[0-9]{4,4}/g)) {
  console.log("Correct");
} else {
  console.log("Zipcode must be 4 numbers!");
}

if (profile.city.match(/[A-ZÆØÅ]|[a-zæøå]\w+/g)) {
  console.log("Correct");
} else {
  console.log("City must be letters only!");
}

if (profile.city.match(/^[A-Za-zæøåÆØÅ.\s_-]+$/g)) {
  console.log("Correct");
} else {
  console.log("City must be capitalized!");
}

if (profile.phone.length == 8) {
  profile.phone =
    "+45 " +
    profile.phone.slice(0, 2) +
    " " +
    profile.phone.slice(2, 4) +
    " " +
    profile.phone.slice(4, 6) +
    " " +
    profile.phone.slice(6, 8);
  console.log(profile.phone + " Correct");
} else {
  console.log("phone number must at least be 8 numbers long!");
}

// Instrument

profile.instruments.forEach((instrument) => {
  if (instrument.instrumentName != "") {
    console.log("Correct");
  } else {
    console.log("Instrument is required");
  }

  if (instrument.skillLevel != "") {
    console.log("Correct");
  } else {
    console.log("Minimum Skill Level is required");
  }
});

// ENSEMBOLE

const ensemble = {
  name: "Mor's hule",
  description: "Her sker...",
  website: "Morshule.dk",
  zipCode: "4200",
  city: "Byen",
  activeMusicians: "1",
  practiceFrequency: "hvert sekund på uret",
  continuously: true,
  projectBased: false,
  genre: ["Ukendt"],
  admin: { _id: "6388ed377db5989f2e22e646" },
  posts: [
    {
      title: "Looking for violinst",
      description:
        "Looking for beginner violinist to get inducted into the ensemble",
      instrument: "Violin",
      minimumSkillLevel: "1",
      genre: ["Classical", "Baroque"],
    },
  ],
};

if (ensemble.name != "") {
  console.log("Correct");
} else {
  console.log("Name is required!");
}

if (ensemble.name.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
  console.log("Correct");
} else {
  console.log("Name must begin with a capitalized letter or a number!");
}

if (ensemble.description.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
  console.log("Correct");
} else {
  console.log("Description must begin with a capitalized letter or a number!");
}

// ^((ftp|http|https):\/\/)?
// ^ Means to check the beginning of the string
// \ is an escaped character, in this case a /
// ? placed at then end of a portion of regex means it is optional
// meaning this bit optionally checks if url begins with for example https://
// There is then an optional check for www.
// ?! is a negative lookahead, in this case making sure it follows the proper structure of a url
// and doesn't end up something like httpswww. or similar
// .* tells it that it has to match everything except linebreaks for the following bit
// the next few portions have to do with the url itself
// the first [a-zA-Z0-9_-] is for the url itself, like facebook for example
// _- just allows for underscores and hyphens in the url
// the next [\.a-zA-Z] is for the domain name itself, like .com
// \ is an escaped character, in this case a .
if (
  ensemble.website.match(
    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)/g
  )
) {
  console.log("Correct");
} else {
  console.log("Website must be a url");
}

if (ensemble.zipCode.match(/[0-9]{4,4}/g)) {
  console.log("Correct");
} else {
  console.log("Zipcode must be 4 numbers");
}

if (ensemble.city != "") {
  console.log("Correct");
} else {
  console.log("City is required!");
}

if (ensemble.city.match(/[A-ZÆØÅ]|[a-zæøå]\w+/g)) {
  console.log("Correct");
} else {
  console.log("City must be letters only!");
}

if (ensemble.city.match(/^[A-ZÆØÅ]/g)) {
  console.log("Correct");
} else {
  console.log("City must be capitalized!");
}

// Ensemble Posts

ensemble.posts.forEach((post) => {
  if (post.title != "") {
    console.log("Correct");
  } else {
    console.log("Title is required");
  }

  if (post.title.match(/[0-9A-ZÆØÅ]|[0-9a-zæøå]\w+/g)) {
    console.log("Correct");
  } else {
    console.log("Title must be letters or numbers only");
  }

  if (post.description.match(/^[A-ZÆØÅ]|^[0-9]/g)) {
    console.log("Correct");
  } else {
    console.log(
      "Description must begin with a capitalized letter or a number!"
    );
  }

  if (post.instrument != "") {
    console.log("Correct");
  } else {
    console.log("Instrument is required");
  }

  if (post.minimumSkillLevel != "") {
    console.log("Correct");
  } else {
    console.log("Minimum Skill Level is required");
  }
});
