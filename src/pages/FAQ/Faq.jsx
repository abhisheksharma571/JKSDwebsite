import React, { useState } from 'react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "How are the classes conducted?",
      answer: "Classes take place in-person with direct instruction from experienced trainers. You’ll be able to engage with instructors and fellow students for a more interactive and hands-on learning experience."
    },
    {
      question: "Can I get a refund if I’m not satisfied with the course?",
      answer: "Refund policies vary depending on the course provider. Typically, there is a refund window if you decide to withdraw within a certain period after enrolling. Be sure to check the specific refund policy before registering."
    },
    {
      question: "Will I have access to course materials after completing the course?",
      answer: "Yes, you’ll have access to the materials provided during the course. Any physical or digital resources shared will be available for you to reference even after the course ends."
    },
    {
      question: "Are there any prerequisites for enrolling in the courses?",
      answer: "Most courses are beginner-friendly, so specific prerequisites are not usually required. However, certain advanced programs might expect some prior knowledge. Check the course details for specific requirements."
    },
    {
      question: "How do I access support during the course?",
      answer: "Support is provided through face-to-face interactions with instructors during class hours. You can also ask questions during breaks or in dedicated assistance sessions."
    },
    {
      question: "Is there any batch transfer fee?",
      answer:
        "No, there is no batch transfer fee. You can switch to a different batch without any additional charges, but it's always best to confirm with the course provider for any specific guidelines or policies.",
    },
    {
      question: "What certificate will i get?",
      answer:
        "Upon completing the course, you will receive a certificate of completion, which is typically recognized in the industry. The certificate will detail the skills and knowledge you’ve gained, and it may vary depending on the specific course, such as a completion certificate or an industry-recognized certification. Be sure to check the course details for the exact type of certificate offered.",
    },
    {
      question: "Is having a laptop is mandatory for the courses?",
      answer:
        "Having a laptop is not always mandatory, but it is highly recommended for most courses. A laptop allows you to practice skills, complete assignments, and participate in hands-on projects more effectively. Some courses, especially in tech or design fields, may require software installations, which are easier to manage on a personal device. However, specific requirements depend on the course, so it's best to check with the program details.",
    },
    {
      question: "Is there any criteria to get placement assistance?",
      answer:
        "Yes, to receive placement assistance, you typically need to complete the course, maintain good performance in assessments, and ensure active participation in career preparation activities like resume building and mock interviews. Some programs may also require a minimum attendance. Be sure to check the specific requirements for your course.",
    },
    {
      question: "What is the salary package one can expect after completion of the courses?",
      answer:
        "The salary package you can expect after completing the course typically ranges from 3-4 LPA for entry-level positions, depending on the industry, your prior experience, location, and the role you’re applying for. As you gain more experience and skills, there’s potential for higher packages.",
    },
  ];

  return (
    <section className="text-black bg-background py-10 px-4 md:px-8">
      <h1 className="md:text-5xl  text-[#08528e] text-center pt-10 font-philosopher font-black text-2xl">FAQ's</h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b border-orange">
            <button
              className={`w-full bg-background flex justify-between items-center py-3 px-3 text-lg md:text-xl font-semibold focus:outline-none text-start hover:text-orange ${
                openIndex === index ? 'text-orange' : 'text-black'
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <i
                className={`fas fa-chevron-down transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              ></i>
            </button>
            <p
              className={`text-lg transition-all duration-500 overflow-hidden text-start ${
                openIndex === index ? 'max-h-auto opacity-100 py-3 px-5' : 'max-h-0 opacity-0'
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
