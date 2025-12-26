// ============================================
// Quiz System - Interactive Quizzes
// ============================================

// Quiz Questions Data - Kategorilere göre düzenlenmiş
const quizCategories = {
    genel: {
        name: "Genel Bilgi",
        questions: [
            {
                question: "Aile içinde en önemli değer nedir?",
                options: [
                    "Sevgi ve saygı",
                    "Para ve maddi zenginlik",
                    "Bireysel özgürlük",
                    "Rekabet ve başarı"
                ],
                correct: 0
            },
            {
                question: "Sabır ne zaman önemlidir?",
                options: [
                    "Sadece zor zamanlarda",
                    "Her zaman ve her durumda",
                    "Sadece iş hayatında",
                    "Sadece aile içinde"
                ],
                correct: 1
            },
            {
                question: "Şükür etmek ne anlama gelir?",
                options: [
                    "Sadece dua etmek",
                    "Sahip olduklarımızın farkında olmak ve takdir etmek",
                    "Başkalarıyla karşılaştırmak",
                    "Sadece maddi şeylere teşekkür etmek"
                ],
                correct: 1
            },
            {
                question: "Eğitimde en önemli faktör nedir?",
                options: [
                    "Sadece akademik başarı",
                    "Karakter gelişimi ve değerler eğitimi",
                    "Sadece mesleki beceriler",
                    "Rekabet ve yarışma"
                ],
                correct: 1
            },
            {
                question: "Ahlaki değerler neden önemlidir?",
                options: [
                    "Sadece toplumsal kurallar için",
                    "Bireysel ve toplumsal uyum için",
                    "Sadece dini nedenlerle",
                    "Sadece çocuklar için"
                ],
                correct: 1
            },
            {
                question: "Hayatın anlamını bulmak için ne yapmalıyız?",
                options: [
                    "Sadece maddi başarı peşinde koşmak",
                    "Kendimizi tanımak ve çevremizdeki dünyayı anlamak",
                    "Sadece eğlence ve zevk peşinde koşmak",
                    "Başkalarını taklit etmek"
                ],
                correct: 1
            },
            {
                question: "Aile bağlarını güçlendiren nedir?",
                options: [
                    "Sadece maddi destek",
                    "Birlikte geçirilen zaman, paylaşılan anılar ve karşılıklı destek",
                    "Sadece hediye vermek",
                    "Sadece birlikte yemek yemek"
                ],
                correct: 1
            },
            {
                question: "Doğru iletişim nasıl olmalıdır?",
                options: [
                    "Sadece konuşmak",
                    "Dinlemek, anlamak ve saygılı bir şekilde ifade etmek",
                    "Sadece emir vermek",
                    "Sadece eleştirmek"
                ],
                correct: 1
            }
        ]
    },
    ahlak: {
        name: "Ahlak",
        questions: [
            {
                question: "Kur'an-ı Kerim'de 'Ben cinleri ve insanları, ancak bana ibadet etsinler diye yarattım' ayeti hangi surededir?",
                options: [
                    "Bakara Suresi",
                    "Zariyat Suresi",
                    "İhlas Suresi",
                    "Fatiha Suresi"
                ],
                correct: 1
            },
            {
                question: "Hz. Muhammed (s.a.v.)'in 'En hayırlınız, ailesine karşı en hayırlı olanınızdır' hadisi hangi konuyla ilgilidir?",
                options: [
                    "İbadet",
                    "Aile ilişkileri",
                    "Ticaret",
                    "Eğitim"
                ],
                correct: 1
            },
            {
                question: "İslam'da 'el-Emin' lakabı ne anlama gelir?",
                options: [
                    "Zengin",
                    "Güvenilir",
                    "Bilgili",
                    "Cesur"
                ],
                correct: 1
            },
            {
                question: "Hilfu'l-Fudul (Erdemliler Cemiyeti) ne için kurulmuştur?",
                options: [
                    "Ticaret yapmak için",
                    "Sosyal adalet ve zayıfları korumak için",
                    "Eğitim vermek için",
                    "Savaşmak için"
                ],
                correct: 1
            },
            {
                question: "Kur'an-ı Kerim'de sabır ile ilgili 'Sabredenlere mükafatları hesapsız olarak verilecektir' ayeti hangi surededir?",
                options: [
                    "Bakara Suresi",
                    "Zümer Suresi",
                    "İnşirah Suresi",
                    "Yasin Suresi"
                ],
                correct: 1
            },
            {
                question: "İslam'da şükrün çeşitleri nelerdir?",
                options: [
                    "Sadece dil ile şükür",
                    "Kalp, dil ve organlar ile şükür",
                    "Sadece kalp ile şükür",
                    "Sadece organlar ile şükür"
                ],
                correct: 1
            },
            {
                question: "Hz. Muhammed (s.a.v.) peygamberlikten önce hangi lakabıyla tanınırdı?",
                options: [
                    "el-Fatih",
                    "el-Emin",
                    "el-Kahhar",
                    "er-Rahman"
                ],
                correct: 1
            },
            {
                question: "Kur'an-ı Kerim'de 'Eğer şükrederseniz, elbette size (nimetimi) artıracağım' ayeti hangi surededir?",
                options: [
                    "Bakara Suresi",
                    "İbrahim Suresi",
                    "Nisa Suresi",
                    "Maid Suresi"
                ],
                correct: 1
            }
        ]
    },
    islamTarihi: {
        name: "İslam Tarihi",
        questions: [
            {
                question: "Hz. Muhammed (s.a.v.) hangi yılda doğmuştur?",
                options: [
                    "570",
                    "571",
                    "572",
                    "573"
                ],
                correct: 1
            },
            {
                question: "Fil Vakası hangi yılda gerçekleşmiştir?",
                options: [
                    "570",
                    "571",
                    "572",
                    "573"
                ],
                correct: 1
            },
            {
                question: "Hz. Muhammed (s.a.v.)'in sütannesi kimdir?",
                options: [
                    "Halime bint Ebi Zu'eyb",
                    "Amine bint Vehb",
                    "Fatıma bint Esed",
                    "Ümmü Eymen"
                ],
                correct: 0
            },
            {
                question: "Hacerü'l-Esved hadisesi Hz. Muhammed (s.a.v.) kaç yaşındayken gerçekleşmiştir?",
                options: [
                    "30",
                    "35",
                    "40",
                    "45"
                ],
                correct: 1
            },
            {
                question: "Hz. Muhammed (s.a.v.) hangi yaşta peygamber olmuştur?",
                options: [
                    "38",
                    "40",
                    "42",
                    "45"
                ],
                correct: 1
            },
            {
                question: "Hz. Hatice ile Hz. Muhammed (s.a.v.) evlendiğinde Hz. Muhammed kaç yaşındaydı?",
                options: [
                    "23",
                    "25",
                    "27",
                    "30"
                ],
                correct: 1
            },
            {
                question: "Fil Suresi kaç ayettir?",
                options: [
                    "3",
                    "5",
                    "7",
                    "9"
                ],
                correct: 1
            },
            {
                question: "Ebrehe'nin ordusunu yok eden kuşların adı nedir?",
                options: [
                    "Hüdhüd",
                    "Ebabil",
                    "Kartal",
                    "Şahin"
                ],
                correct: 1
            }
        ]
    },
    kuraniKerim: {
        name: "Kur'an-ı Kerim",
        questions: [
            {
                question: "Kur'an-ı Kerim'de kaç sure vardır?",
                options: [
                    "112",
                    "114",
                    "116",
                    "118"
                ],
                correct: 1
            },
            {
                question: "Kur'an-ı Kerim'in ilk inen ayetleri hangi surededir?",
                options: [
                    "Fatiha",
                    "Alak",
                    "Bakara",
                    "İhlas"
                ],
                correct: 1
            },
            {
                question: "Kur'an-ı Kerim'de 'Oku!' emri hangi surededir?",
                options: [
                    "Fatiha Suresi",
                    "Alak Suresi",
                    "Bakara Suresi",
                    "İhlas Suresi"
                ],
                correct: 1
            },
            {
                question: "Fil Suresi hangi dönemde inmiştir?",
                options: [
                    "Medine dönemi",
                    "Mekke dönemi",
                    "Her ikisi de",
                    "Bilinmiyor"
                ],
                correct: 1
            },
            {
                question: "Kur'an-ı Kerim'de 'Hiç bilenlerle bilmeyenler bir olur mu?' ayeti hangi surededir?",
                options: [
                    "Bakara Suresi",
                    "Zümer Suresi",
                    "Alak Suresi",
                    "Fatiha Suresi"
                ],
                correct: 1
            },
            {
                question: "Kur'an-ı Kerim'de en uzun sure hangisidir?",
                options: [
                    "Nisa Suresi",
                    "Bakara Suresi",
                    "Maide Suresi",
                    "En'am Suresi"
                ],
                correct: 1
            },
            {
                question: "Kur'an-ı Kerim'de en kısa sure hangisidir?",
                options: [
                    "İhlas Suresi",
                    "Kevser Suresi",
                    "Nasr Suresi",
                    "Fil Suresi"
                ],
                correct: 1
            },
            {
                question: "Kur'an-ı Kerim'de 'Muhakkak ki zorlukla beraber kolaylık vardır' ayeti hangi surededir?",
                options: [
                    "Bakara Suresi",
                    "İnşirah Suresi",
                    "Zümer Suresi",
                    "Yasin Suresi"
                ],
                correct: 1
            }
        ]
    }
};

// Varsayılan olarak genel kategorisini kullan
let currentQuizCategory = 'genel';
let quizQuestions = quizCategories.genel.questions;

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let quizStarted = false;

// Update quiz category
function updateQuizCategory(category) {
    if (quizCategories[category]) {
        quizQuestions = quizCategories[category].questions;
        currentQuizCategory = category;
    }
}

window.updateQuizCategory = updateQuizCategory;

// ============================================
// Initialize Quiz
// ============================================

function initQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) {
        console.error('quizContainer bulunamadı!');
        return;
    }
    
    // Check if quizQuestions is available
    if (!quizQuestions || quizQuestions.length === 0) {
        console.error('Quiz soruları yüklenmedi! Kategori:', currentQuizCategory);
        // Try to update category again
        if (window.updateQuizCategory && currentQuizCategory) {
            window.updateQuizCategory(currentQuizCategory);
        }
        return;
    }
    
    console.log('Quiz başlatılıyor, soru sayısı:', quizQuestions.length);
    
    // Set up quiz HTML structure
    quizContainer.innerHTML = `
        <div class="quiz-header">
            <h2 class="quiz-title">${getCategoryName(currentQuizCategory)} Quiz'i</h2>
        </div>
        <div class="quiz-progress">
            <div class="progress-bar">
                <div class="progress-fill" style="width: 0%"></div>
            </div>
            <div class="progress-text">Soru 0 / ${quizQuestions.length}</div>
        </div>
        <div class="question-card">
            <h3 class="question-text"></h3>
            <div class="answer-options"></div>
        </div>
        <div class="quiz-actions">
            <button class="btn btn-primary" id="nextBtn" onclick="nextQuestion()" style="display: none;">Sonraki Soru</button>
            <button class="btn btn-primary" id="submitBtn" onclick="submitQuiz()" style="display: none;">Bitir</button>
            <button class="btn btn-secondary" id="exitQuizBtn" onclick="exitQuiz()">Quiz'den Çık</button>
        </div>
    `;
    
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    quizStarted = true;
    
    renderQuiz();
}

// ============================================
// Render Quiz
// ============================================

function renderQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;
    
    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }
    
    const question = quizQuestions[currentQuestionIndex];
    selectedAnswer = null;
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    if (progressText) {
        progressText.textContent = `Soru ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    }
    
    // Render question
    const questionText = document.querySelector('.question-text');
    if (questionText) {
        questionText.textContent = question.question;
    }
    
    // Render options - Shuffle options but track correct answer
    const answerOptions = document.querySelector('.answer-options');
    if (answerOptions) {
        answerOptions.innerHTML = '';
        
        // Create array with indices to shuffle
        const indices = question.options.map((_, index) => index);
        // Shuffle indices
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        
        // Store shuffled mapping: originalIndex -> newIndex
        const shuffledOptions = indices.map((originalIndex, newIndex) => ({
            text: question.options[originalIndex],
            originalIndex: originalIndex
        }));
        
        // Store the new correct index
        question.shuffledCorrectIndex = indices.indexOf(question.correct);
        
        // Render shuffled options
        shuffledOptions.forEach((option, newIndex) => {
            const optionElement = document.createElement('button');
            optionElement.className = 'answer-option';
            optionElement.textContent = option.text;
            optionElement.addEventListener('click', () => selectAnswer(newIndex));
            answerOptions.appendChild(optionElement);
        });
    }
    
    // Update buttons
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    if (nextBtn) {
        nextBtn.style.display = 'none';
    }
    if (submitBtn) {
        submitBtn.style.display = currentQuestionIndex === quizQuestions.length - 1 ? 'inline-block' : 'none';
    }
}

// ============================================
// Select Answer
// ============================================

function selectAnswer(index) {
    if (selectedAnswer !== null) return; // Already answered
    
    selectedAnswer = index;
    const options = document.querySelectorAll('.answer-option');
    const question = quizQuestions[currentQuestionIndex];
    
    // Use shuffled correct index if available, otherwise use original
    const correctIndex = question.shuffledCorrectIndex !== undefined 
        ? question.shuffledCorrectIndex 
        : question.correct;
    
    options.forEach((option, i) => {
        option.classList.remove('selected');
        if (i === index) {
            option.classList.add('selected');
        }
    });
    
    // Show correct/incorrect feedback
    setTimeout(() => {
        options.forEach((option, i) => {
            option.classList.add('disabled');
            if (i === correctIndex) {
                option.classList.add('correct');
            } else if (i === index && i !== correctIndex) {
                option.classList.add('incorrect');
            }
        });
        
        // Update score
        if (index === correctIndex) {
            score++;
        }
        
        // Show next button
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) {
            nextBtn.style.display = 'inline-block';
        }
    }, 500);
}

// ============================================
// Next Question
// ============================================

function nextQuestion() {
    currentQuestionIndex++;
    renderQuiz();
}

// ============================================
// Submit Quiz
// ============================================

function submitQuiz() {
    if (selectedAnswer === null) {
        alert('Lütfen bir cevap seçin.');
        return;
    }
    
    // Process last answer
    const question = quizQuestions[currentQuestionIndex];
    // Use shuffled correct index if available, otherwise use original
    const correctIndex = question.shuffledCorrectIndex !== undefined 
        ? question.shuffledCorrectIndex 
        : question.correct;
    
    if (selectedAnswer === correctIndex) {
        score++;
    }
    
    showResults();
}

// ============================================
// Show Results
// ============================================

function showResults() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;
    
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    quizContainer.innerHTML = `
        <div class="quiz-results">
            <div class="result-score">${score} / ${quizQuestions.length}</div>
            <div class="result-message">${getResultMessage(percentage)}</div>
            <div class="result-details">
                <p>Doğru Cevap: ${score}</p>
                <p>Yanlış Cevap: ${quizQuestions.length - score}</p>
                <p>Başarı Oranı: %${percentage}</p>
            </div>
            <div class="quiz-actions">
                <button class="btn btn-primary" onclick="restartQuiz()">Tekrar Dene</button>
            </div>
        </div>
    `;
}

// ============================================
// Get Result Message
// ============================================

function getResultMessage(percentage) {
    if (percentage >= 90) {
        return 'Mükemmel! Harika bir sonuç! 🌟';
    } else if (percentage >= 70) {
        return 'Çok iyi! Tebrikler! 👏';
    } else if (percentage >= 50) {
        return 'İyi! Biraz daha çalışabilirsiniz. 💪';
    } else {
        return 'Tekrar deneyin, başaracaksınız! 📚';
    }
}

// ============================================
// Restart Quiz
// ============================================

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    
    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer) {
        quizContainer.innerHTML = `
            <div class="quiz-header">
                <h2 class="quiz-title">${getCategoryName(currentQuizCategory)} Quiz'i</h2>
            </div>
            <div class="quiz-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 0%"></div>
                </div>
                <div class="progress-text">Soru 0 / ${quizQuestions.length}</div>
            </div>
            <div class="question-card">
                <h3 class="question-text"></h3>
                <div class="answer-options"></div>
            </div>
        <div class="quiz-actions">
            <button class="btn btn-primary" id="nextBtn" onclick="nextQuestion()" style="display: none;">Sonraki Soru</button>
            <button class="btn btn-primary" id="submitBtn" onclick="submitQuiz()" style="display: none;">Bitir</button>
            <button class="btn btn-secondary" id="exitQuizBtn" onclick="exitQuiz()">Quiz'den Çık</button>
        </div>
        `;
    }
    
    renderQuiz();
}

// ============================================
// Exit Quiz
// ============================================

function exitQuiz() {
    // Confirm exit if quiz has started
    if (quizStarted && currentQuestionIndex > 0) {
        const confirmExit = confirm('Quiz\'den çıkmak istediğinize emin misiniz? İlerlemeniz kaydedilmeyecek.');
        if (!confirmExit) {
            return;
        }
    }
    
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    quizStarted = false;
    
    // Hide quiz container
    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer) {
        quizContainer.style.display = 'none';
    }
    
    // Show category cards
    const categoriesDiv = document.getElementById('quizCategories');
    if (categoriesDiv) {
        categoriesDiv.style.display = 'grid';
    }
    
    // Scroll to top of quiz section
    const quizSection = document.querySelector('.content-section');
    if (quizSection) {
        quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function getCategoryName(category) {
    const names = {
        'genel': 'Genel Bilgi',
        'ahlak': 'Ahlak',
        'islamTarihi': 'İslam Tarihi',
        'kuraniKerim': 'Kur\'an-ı Kerim'
    };
    return names[category] || 'Bilgi';
}

// ============================================
// Initialize on Page Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const startQuizBtn = document.getElementById('startQuizBtn');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', initQuiz);
    }
    
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }
    
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitQuiz);
    }
});

// Make functions globally available
window.nextQuestion = nextQuestion;
window.submitQuiz = submitQuiz;
window.restartQuiz = restartQuiz;
window.initQuiz = initQuiz;
window.exitQuiz = exitQuiz;
window.exitQuiz = exitQuiz;

