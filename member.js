function skillsMember(){
    var member = {
        name: "Ari",
        age: 25,
        skills: {
            frontEnd: [
                { name: "HTML", level: "advanced" },
                { name: "CSS", level: "advanced" },
                { name: "JS", level: "advanced" }
            ],
            backEnd: [
                { name: "PHP", level: "beginner" },
                { name: "MySQL", level: "beginner" }
            ]
        }
    }
    return member;
}