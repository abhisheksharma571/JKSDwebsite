import React, { useState } from 'react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What's the best way to study JavaScript?",
      answer:
        "Start With An Online Course. An online tutorial is probably the best way to learn JavaScript. If you're serious about learning fast, efficiently, and without missing any important information, then you should consider enrolling in an online course.",
    },
    {
      question: "What should I learn after JavaScript / JS?",
      answer:
        "I suggest taking a look at TypeScript and learning some popular frontend frameworks like Angular, React, or Vue. If you are interested in backend, take a look at Node.js.",
    },
    {
      question: "Can I get a job after learning JavaScript?",
      answer:
        "Yes, JavaScript is one of the most in-demand programming languages, and many jobs are available for skilled developers.",
    },
    {
      question: "How long will it take to learn JavaScript?",
      answer:
        "The time it takes to learn JavaScript varies depending on your background and dedication. However, with consistent effort, you can become proficient in a few months.",
    },
  ];

  return (
    <section className="text-black bg-background py-10 px-4 md:px-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center underline mb-10 text-orange">FAQ's</h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b border-orange">
            <button
              className="w-full bg-background flex justify-between items-center py-4 px-3 text-lg md:text-xl font-semibold focus:outline-none"
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
              className={`text-lg transition-all duration-500 overflow-hidden ${
                openIndex === index ? 'max-h-40 opacity-100 py-4 px-3' : 'max-h-0 opacity-0'
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
