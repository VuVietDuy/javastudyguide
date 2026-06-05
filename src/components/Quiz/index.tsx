import React, { useState } from 'react';

const Quiz = ({ questions }: { questions: any[] }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) setScore(score + 1);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h3>Kết quả của bạn: {score} / {questions.length}</h3>
                <button onClick={() => window.location.reload()}>Làm lại</button>
            </div>
        );
    }

    const q = questions[currentQuestion];
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>Câu hỏi {currentQuestion + 1}: {q.question}</h3>
            {q.options.map((opt: any, index: any) => (
                <button
                    key={index}
                    onClick={() => handleAnswer(opt.isCorrect)}
                    style={{ display: 'block', margin: '5px 0', padding: '10px', width: '100%', cursor: 'pointer' }}
                >
                    {opt.text}
                </button>
            ))}
        </div>
    );
};

export default Quiz;