import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "How are kids placed in groups during summer camps?",
    answer: `For best camp dynamics, groups will be pre-set Sunday based on past participation and registration comments...`,
  },
  {
    question:
      "Can I request my child be placed in a group with a friend or teammate(s)?",
    answer: `We do not accept special requests for grouping assignments. While we are happy that players and their friends or teammates have registered for the same week of camp (if only to help you out to carpool), Coerver Colorado is a skills camp and we want to ensure the most growth and development for every player. Our placement system, which we’ve now used for over 25,000 players, groups Campers into teams with others of similar ability and experience. As mentioned above, this is a skills camp, and a player who is much stronger or weaker than the others on a team will not get the most out of the camp in that setting. Nor will the others in a team with players of widely differing abilities. Assignment begins by separating the camp by age into groups of about 12. We consider returning players to be “a year older” in this initial grouping. So most Teams start with the younger campers being returnees, the older campers the new ones. Some factors that go into placing your child into a group include: age, previous Coerver Camp experience, and tX games results (if child is a repeat camper). Coerver camps include several activities to help kids get to know one another, and create a welcoming environments for them to build friendships. Because of our desire to advance every player, we cannot move players to different groups unless recommended by their coach through evaluations. At camp players will go through three different evaluations before noon on Monday that reassures the group assignment.`,
  },
  {
    question:
      "What are tX Games and where do I find my child’s stats and scores?",
    answer:
      "Players participate in a series of skills tests measuring first touch, dribbling speed, passing accuracy and distance as well as shooting power. We call these “tX Games”. Players test their skills on Thursday and Friday during camp. Once camp is completed, recorded scores will be uploaded to each Coerver Colorado player profile where you can see their stats compared to group, camp and age group benchmarks.",
  },
  {
    question:
      "Where do I find the refund policy for the program I’m signed up for?",
    answer:
      "Programs each note their refund policy at the bottom of each of their pages.",
  },
  {
    question: "I missed a few days of my camp/program, can I get it prorated?",
    answer:
      "Unfortunately, we cannot prorate our programs. We understand every now and then a player will miss one day of camp. Although we encourage each player to attend all 5 days, we understand things come up. If you cannot attend at least 3 days of camp, it may be best to wait and sign up for a different week of camp that better fits your schedule.",
  },
  {
    question:
      "The camp I want to attend is sold out, is there anything I can do to get in it?",
    answer:
      "Every now and then we will have slots open up due to players switching camps or dropping out last minute. If this happens, we contact people in order on the wait list for that camp to fill the spot(s). If the camp you greatly wish to attend is sold out, please call us at 720-255-4911 to add your name to its wait list.",
  },
  {
    question: "Can I switch my child from camp to camp during the summer?",
    answer:
      "Each camper is allowed to switch to a different camp one time. If you are switching to another camp, it must be done at least 7 days before the first day of both camps. Changes are dependent on availability. Please call 720-255-4911 to switch camps.",
  },
  {
    question: "My kid is missing Friday, what should we do?",
    answer:
      "If your camper will be missing Friday, or a part of Friday, please turn in a self-addressed 8″ x 11″ envelope on Monday to the camp director, with camper’s name, camp, shirt size, and we will send their items to you. If you are not able to bring the envelope on Monday, please hand it directly to the camp director during the week. If you have a friend participating in the same camp, your friend can let their coach know and pick that up for your child.",
  },
  {
    question: "When does my child get a multi-camper jersey?",
    answer:
      "Players receive multi-camper jerseys on the Friday of their 2nd camp that summer.",
  },
  {
    question:
      "I’m attending a program held in the Fall, Winter, or Spring, what should my player bring with them?",
    answer:
      "Ball – write name and phone number on it. Water bottle – can refill at camp. Shin guards- required to be worn at all times on the field",
  },
  {
    question: "Can my child refill their water at camp?",
    answer:
      "Yes! We have water available on site, and coaches stop for water breaks frequently throughout the day.",
  },
  {
    question:
      "My child has a medical condition and I would like to leave something with the trainer. How can I do that?",
    answer:
      "When you check in on the first day of camp, let the staff member know. They will link you up with the trainer. Please bring your items in a zip-lock bag (or container) with your campers name and number on it.",
  },
  {
    question: "Will there be shade?",
    answer:
      "Most of the camp locations have shaded area, however, we cannot always know how much shade will be available. We encourage campers to visit available shade during lunch and rest.",
  },
  {
    question:
      "The weather is looking bad, how will I know if camp is canceled and if I should pick up my player?",
    answer:
      "Call 720-255-3672. If there are delays or cancellations, the weather hotline will be updated; if there is no update on the hotline, that means no delays or cancellations have been made. We do play through rain alone. Please note, if there is inclement weather, it may be necessary for you to come pick up your player for us to maintain social distancing. If that is the case, we will alert you via email and have a message on our weather line.",
  },
  {
    question: "Is lunch provided during summer camps?",
    answer:
      "No. Campers must bring their own lunch during summer camps, unless your child is attending the Mighty Mites, in which case their day ends are 11:30 AM.",
  },
  {
    question: "How do I prepare for my first day of a summer camp?",
    answer:
      "You will receive a Pre-Camp letter the Monday before camp starts that has all the information you’ll need leading up to camp beginning.",
  },
  {
    question: "What is the Coerver Colorado tax ID number?",
    answer: "Tax ID #: 20-8027460",
  },
  {
    question: "Do you have discounts?",
    answer:
      "Yes, we do offer discounts! The best way to find out about our discounts is to stay subscribed to our email (see below to join), and follow us on Facebook and Instagram. All discounts must be taken at time of registration. No exceptions. Coerver Colorado reserves the right to correct balance due if coupon code is wrongly used.",
  },
  {
    question:
      "What if I didn’t enter the coupon code when I registered, or the coupon code already expired?",
    answer:
      "All discounts must be taken at time of registration. No exceptions. Discounts only apply to camp/program it specifies. Coerver Colorado reserves the right to correct balance due if coupon code is wrongly used. If coupon code has expired, it can no longer be used.",
  },
  {
    question:
      "I want to join the Coerver Colorado email list, how can I do that?",
    answer:
      "Email coervercolorado@gmail.com from the email address you would liked added, with the subject: Add to Coerver Minute Email List",
  },
];

const FAQAccordion = () => {
  return (
    <Box sx={{ textAlign: "left" }}>
      {faqData.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body1">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQAccordion;
