import StaticList from "~/app/_components/ui/StaticList";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const CODE_OF_CONDUCT_RULES = [
    {
        heading: "DISCIPLINE AND CODE OF CONDUCT FOR STUDENTS",
        rules: [
            "Punctuality and regularity in attendance is essential. Students who have been absent the previous day must bring a note of explanation through 'Record of Non-attendance' page of the almanac without fail. In case of illness a Medical Certificate should also be sent. Students who expect to reach home late after the school due to personal reasons must inform their parents/guardians in advance.",
            "Late arrival will be permitted between 8:50 a.m. to 9:00 a.m., only 3 times in a month.",

            "A minimum of 85% attendance is compulsory to be eligible to appear in the examination.",
            "Students must come to school in neatly laundered uniform and polished shoes. The hair should be trimmed and the nails must be cut regularly. Girls with long hair should make plaits. Skirts should be worn Knee-length.",
            "Students are not allowed to use school phones without permission.",
            "Respect for school property and school belongings is an absolute must.",
            "In the event of collective damage to school property in class room, the entire class will be charged the cost of damage. A vigilant outlook should be maintained towards keeping the surroundings clean. All waste papers should be picked up and thrown into the dustbin.",
            "Students are not allowed to leave the class without class out-pass and without permission of the teacher. While moving in between the classes in the corridors and while using the staircases all must keep to the left. Students should move in a way that no child is disturbed.",
            "A student must speak in decent language all the time. He must ensure that his speech is courteous.",
        ],
        footer: "Every student is required to carry the school identity card each day of the school. Students must report any incident of bullying and ragging to the teachers immediately.",
    },
    {
        heading: "PROHIBITED BEHAVIOUR",
        rules: [
            "Irregular attendance, unjustified or unexplained absence, habitual late coming, leaving the school premises without permission, disobedience and any type of unruly and objectionable behaviour. Writing, scratching, engraving graffiti, drawing and splashing ink or defacing the school walls, furniture and property.",
            "Gluing stickers and posters of any kind on the school property.",
            "Use of foul and unparliamentary language.",
            "Neglect of Homework, disobedience and disrespectful towards members of staff or bad moral influence.",
            "Buying eatables from street vendors",
            "Resource to use of unfair means during examinations.",
            "Making noise, talking loudly, shouting, jeering, hacking, booing, name calling, making cat calls, hissing, mocking and whistling, at any time.",
            "Participating in any incident of bullying and ragging.",
            "Being in restricted areas, ground, empty class rooms, secluded areas, behind buildings (when class is on and without permission.)",
            "Collecting money, contribution and donation without written permission of the Principal.1. Irregular attendance, unjustified or unexplained absence, habitual late coming, leaving the school premises without permission, disobedience and any type of unruly and objectionable behaviour.",
            "Writing, scratching, engraving graffiti, drawing and splashing ink or defacing the school walls, furniture and property.",
        ],
    },
    {
        heading: "PROHIBITED ITEMS",
        rules: [
            "Trinket, Jewellery, Henna, or Tattoos",
            "Objectionable literature or expensive items.",
            "Cell phones, iPods, CD, DVD, e games, pen drives, cameras, music players, obscene materials etc",
            "Crackers, fireworks, fire arms and any other inflammable material.",
            "Gift of any kind for distribution in school even for birthdays.",
            "Toys, any dangerous instrument, tobacco products, alcoholic drinks, chewing gum, banned food",
        ],
    },
    {
        heading: "MEDICAL AID",
        rules: [
            "The school has a well-equipped medical room.",
            "A comprehensive annual medical checkup of each child is done by qualified doctors to monitor the child's physical growth. A medical card to record the health status and growth of the child is maintained and a report thereof is sent to the parents for information and necessary action.",
            "First aid treatment is given by a medical team in case of accidents and emergencies.",
            "Parents are informed immediately and may be intimated to take their ward home.",
            "While the school assures all possible precautions and care, the school management will not be responsible for any adverse consequences.",
        ],
    },
    {
        heading: "IMPORTANT POINTS FOR PARENTS",
        rules: [
            "Students cannot be called to the school office to attend to phone calls during school hours.",
            "Sholars personal record & medical history in duplicate must be filled by the parents and the submitted to the class teacher on the 1st working day itself.",
            "The pupil's Diary is to keep you abreast of the day to day progress of your child; his/her assignments and keep in contact with his/her teachers.",
            "The Diary should be checked every day and assignments completed by the child regularly.",
            "The class teacher should be informed if there is any change in address or telephone number. The changes should be recorded in the diary as well.",
            "Parents/Guardians are not permitted to enter classrooms to meet their children or to seek urscheduled interviews with teachers during school hours.",
            "Polythene bags are not allowed in the school.",
            "Parents are requested to visit the school website/ Integral Web School regularly for updates (especially for non-scheduled holidays).",
            "Half days and short leaves are not granted to students.",
        ],
        footer: "All our considerations are in favour of child, his or her safety, well being and good education. All rules have been framed keeping that in view.",
    },
    {
        heading: "LEAVE OF ABSENCE",
        rules: [
            "A student must not remain absent without prior permission of the Principal. A leave application is to be submitted for the same.",
            "If a student remains absent from school, due to illness or emergency, even for a day, the parent needs to fill in the 'Non Attendance Record' found in the school almanac.",
            "If the leave is for more than three days, the student needs to submit a leave application.",
            "Leave application and leave record should be duly signed by the parents or guardian.",
            "Leave will not be granted on the reopening or closing day of a term.",
        ],
    },
];

const CodeOfConductPage = () => {
    return (
        <TwoSectionPage linkTitle="Campus Life" currentLink="Code of Conduct">
            <H1>Code of Conduct</H1>
            <ul className="space-y-8">
                {CODE_OF_CONDUCT_RULES.map(rules => (
                    <li key={rules.heading} className="space-y-3">
                        <h4 className="text-xl font-bold">{rules.heading}</h4>
                        <StaticList list={rules.rules} />
                        {rules.footer && <p>{rules.footer}</p>}
                    </li>
                ))}
            </ul>
        </TwoSectionPage>
    );
};

export default CodeOfConductPage;
