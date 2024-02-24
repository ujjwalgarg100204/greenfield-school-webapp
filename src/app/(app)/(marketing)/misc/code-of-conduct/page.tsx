import StaticList from "~/app/_components/ui/StaticList";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const DEMO_RULES = [
    "We hereby notify all the students and their parents that, per CBSE guidelines, students will be evaluated for discipline based on the following criteria: Attendance, Sincerity, Behaviour, Values, Neatness, Compliance with School Rules and Regulations, and Attitude toward Society and the Country.",
    "Therefore, kindly ensure that all the guidelines listed below are strictly followed.",
    "We emphasise elementary qualities like politeness, discipline etc. and encourage our students to imbibe the same in their daily activities. They should greet all the teachers whenever and wherever they meet them. Bullying classmates, using foul language and indecent behaviour inside and outside the school premises would lead to strict disciplinary action.",
    "They should take good care of their health and remain physically fit and strong.",
    "They should never be cruel and should know that cruelty is the trait of a bully, while kindness is the mark of a gentleman. The practice of bullying is strictly prohibited inside the school premises, and no such act will go unnoticed or unpunished. Depending on the gravity of the misconduct, necessary action is to be taken as per CBSE guidelines.",
    "They should always accept and complete the assignments given to them by the teachers.",
    "They should face difficulties courageously and confidently.",
    "They should always be ready to lend a helping hand at home to their parents, brothers and sisters; in school to teachers, companions and any visitor whom they happen to meet on the school premises.",
    "They should never adopt unfair practices like stealing or borrowing others’ belonging without taking permission. They should be truthful.",
    "They should respect the aesthetics of the classroom and the school premises and report any damage caused to the teachers.",
    "They should never hesitate to say ‘NO’ when asked or tempted to do something thing, which they know is wrong.",
    "They should respect the liberty and rights of others.",
    "They should keep their classrooms clean and take care of the school furniture.",
    "Instead of lamenting and grumbling over the evils of the world, they should try to contribute to making the world a better place to live in.",
    "Regardless of caste, colour, or creed, they should view people from all around the world and from all walks of life as their brothers and sisters.",
    "They should not waste their time on idle gossip.",
    "They should take pride in wearing their School Uniform. They should not wear the school uniform in any public place outside of School without permission.",
    "No shouting or whistling is allowed in or around the school building. Running in corridors is strictly prohibited.",
    "Anything that could cause physical harm to someone within a classroom, in a hallway, inside or outside of the school premises is strictly prohibited by the school management.",
    "The hair needs to be trimmed frequently. It cannot touch the collar or cover the forehead. Girls must plait or ponytail their hair neatly.",
    "The student must wear a Blazer during winter as a part of the school uniform.",
    "The student must carry the School Identity Card and the Almanac while coming to School.",
    "The students should not litter their classroom and the other areas of the school premises.",
    "They should be proud of their Alma Mater.",
    "Students must take written permission to carry a camera to photograph the school activity in or outside school. They are not allowed to upload any such photograph (On social media). Any student indulging in such activity on social media will face disciplinary action.",
];

const CodeOfConductPage = () => {
    return (
        <TwoSectionPage linkTitle="Campus Life" currentLink="Code of Conduct">
            <H1>Code of Conduct</H1>
            {DEMO_RULES.length > 0 ? (
                <StaticList list={DEMO_RULES} />
            ) : (
                <p className="text-lg font-semibold text-danger-600">
                    Oops, no rules found
                </p>
            )}
        </TwoSectionPage>
    );
};

export default CodeOfConductPage;
