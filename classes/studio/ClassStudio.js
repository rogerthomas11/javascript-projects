//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore){
        this.scores.push(newScore);
    }

    average(){
        let scoreAverage = 0;
        for (let i = 0; i < this.scores.length; i++) {
            scoreAverage += this.scores[i];
        }

        let newAverage = Math.round((scoreAverage / this.scores.length) * 10) / 10;

        return newAverage;
    }

    status(){
        if (this.average() > 90) {
            return 'Accepted';
        } else if(this.average() > 80 || this.average() < 89) {
            return 'Reserve';
        } else if(this.average() > 70 || this.average() < 79) {
            return 'Probationary';
        } else if (this.average() < 70) {
            return 'Rejected';
        }
    }

}



let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);

let count = 0;
while (gladGator.status() !== 'Reserve'){
    let updatedScore = Math.round(Math.random()*100);
    if (updatedScore > 90) {
        gladGator.addScore(updatedScore);
        count++;
    }
}
console.log(count);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
