export const lesson116 = {
    id: "116",
    period: "116",
    title: "Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ",
    subject: "math",
    week: "23",
    objective: "Mô tả được hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ.",

    content: `
        <div class="space-y-6">
            <div class="glass-card p-6 bg-blue-50 border-l-8 border-blue-500 rounded-r-3xl">
                <h4 class="text-xl font-black text-blue-800 mb-4">A. Hình khai triển của hình lập phương</h4>
                <p class="text-lg leading-relaxed mb-4 font-medium">
                    Khi ta cắt theo một số cạnh của một hình lập phương và trải các mặt ra trên một mặt phẳng, ta được <b>hình khai triển</b> của nó.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
                    <div class="bg-white p-4 rounded-2xl shadow-sm border-2 border-blue-100 flex flex-col items-center">
                        <span class="text-xs font-black uppercase text-blue-400 mb-2">Mô hình 3D</span>
                        <div class="w-full h-48 flex items-center justify-center bg-gray-50 rounded-xl">
                            [[CUBE3D|Hình lập phương]]
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-2xl shadow-sm border-2 border-blue-100 flex flex-col items-center">
                        <span class="text-xs font-black uppercase text-blue-400 mb-2">Hình khai triển (Dạng chữ T)</span>
                        <svg width="200" height="150" viewBox="0 0 200 150" class="drop-shadow-md">
                            <rect x="70" y="10" width="30" height="30" fill="#3B82F6" stroke="white" stroke-width="1"/>
                            <rect x="40" y="40" width="30" height="30" fill="#3B82F6" stroke="white" stroke-width="1"/>
                            <rect x="70" y="40" width="30" height="30" fill="#1D4ED8" stroke="white" stroke-width="1"/>
                            <rect x="100" y="40" width="30" height="30" fill="#3B82F6" stroke="white" stroke-width="1"/>
                            <rect x="70" y="70" width="30" height="30" fill="#3B82F6" stroke="white" stroke-width="1"/>
                            <rect x="70" y="100" width="30" height="30" fill="#3B82F6" stroke="white" stroke-width="1"/>
                        </svg>
                        <p class="text-xs text-gray-500 mt-2 italic">Gồm 6 hình vuông bằng nhau</p>
                    </div>
                </div>
            </div>

            <div class="glass-card p-6 bg-emerald-50 border-l-8 border-emerald-500 rounded-r-3xl">
                <h4 class="text-xl font-black text-emerald-800 mb-4">B. Hình khai triển của hình trụ</h4>
                <p class="text-lg leading-relaxed mb-4 font-medium">
                    Hình khai triển của hình trụ gồm mặt bên là <b>hình chữ nhật</b> và hai đáy là <b>hình tròn</b>.
                </p>
                <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-emerald-100 mt-4">
                     <div class="flex flex-col md:flex-row justify-around items-center gap-8">
                        <div class="text-center">
                            <div class="w-24 h-32 bg-emerald-200 border-4 border-emerald-500 rounded-full relative mx-auto overflow-hidden">
                                <div class="absolute top-0 w-full h-8 bg-emerald-400/50 border-b-2 border-emerald-500"></div>
                                <div class="absolute bottom-0 w-full h-8 bg-emerald-400/50 border-t-2 border-emerald-500"></div>
                            </div>
                            <p class="text-sm font-black text-emerald-600 mt-3">Hình trụ</p>
                        </div>
                        <div class="text-blue-400 animate-pulse text-2xl">➜</div>
                        <div class="text-center">
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 rounded-full bg-emerald-300 border-2 border-emerald-500 mb-2"></div>
                                <div class="w-40 h-20 bg-emerald-400 border-2 border-emerald-600 rounded-md"></div>
                                <div class="w-12 h-12 rounded-full bg-emerald-300 border-2 border-emerald-500 mt-2"></div>
                            </div>
                            <p class="text-sm font-black text-emerald-600 mt-3">Hình khai triển</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-8">
            <div class="bg-white p-8 rounded-[32px] shadow-xl border-4 border-blue-100 animate-fade-in relative overflow-hidden" style="min-height: 400px;">
                <h4 class="text-3xl font-black text-blue-800 mb-8 border-b-4 border-blue-500 pb-4 flex items-center gap-4">
                    <span class="bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">1</span>
                    Nhận diện hình khối
                </h4>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl border-2 border-blue-200 flex justify-center items-center">
                        <svg width="250" height="200" viewBox="0 0 250 200">
                            <rect x="100" y="20" width="50" height="50" fill="#60A5FA" stroke="#1E40AF" stroke-width="2"/>
                            <rect x="50" y="70" width="150" height="50" fill="#3B82F6" stroke="#1E40AF" stroke-width="2"/>
                            <line x1="100" x2="100" y1="70" y2="120" stroke="#1E40AF" stroke-width="2"/>
                            <line x1="150" x2="150" y1="70" y2="120" stroke="#1E40AF" stroke-width="2"/>
                            <rect x="100" y="120" width="50" height="50" fill="#60A5FA" stroke="#1E40AF" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="space-y-6">
                        <p class="text-2xl font-bold text-gray-700 leading-relaxed italic">
                            "Hình khai triển bên khi gấp lại sẽ tạo thành hình khối nào?"
                        </p>
                        [[MATH_EX|p1|options|label|Hình khai triển này khi gấp lại sẽ cho ta: |A. Hình hộp chữ nhật, B. Hình lập phương, C. Hình trụ|B]]
                    </div>
                </div>
            </div>

            <div class="bg-white p-8 rounded-[32px] shadow-xl border-4 border-pink-100 animate-fade-in relative overflow-hidden" style="min-height: 400px;">
                <h4 class="text-3xl font-black text-pink-800 mb-8 border-b-4 border-pink-500 pb-4 flex items-center gap-4">
                    <span class="bg-pink-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-200">2</span>
                    Đặc điểm hình khai triển
                </h4>
                <div class="bg-pink-50 p-8 rounded-3xl border-2 border-pink-200 mb-8">
                    <p class="text-2xl font-bold text-pink-900 leading-relaxed">
                        Bạn hãy quan sát hình trụ và dự đoán: Khi "mở" mặt bên của nó ra, ta được một hình gì?
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    [[MATH_EX|p2|options|label|A. Hình vuông, B. Hình tròn, C. Hình chữ nhật|C]]
                </div>
            </div>

            <div class="bg-white p-8 rounded-[32px] shadow-xl border-4 border-orange-100 animate-fade-in relative" style="min-height: 450px;">
                <h4 class="text-3xl font-black text-orange-800 mb-8 border-b-4 border-orange-500 pb-4 flex items-center gap-4">
                    <span class="bg-orange-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">3</span>
                    Đếm số mặt
                </h4>
                <div class="flex flex-col md:flex-row gap-10 items-center">
                    <div class="flex-1 space-y-6">
                        <p class="text-2xl font-bold text-gray-700 leading-relaxed">
                            Một hình khai triển của hình lập phương có tất cả bao nhiêu mặt là hình vuông?
                        </p>
                        [[MATH_EX|p3|input|label|Nhập số mặt: |6|ans]]
                    </div>
                    <div class="w-full md:w-64 h-64 bg-orange-50 rounded-full flex items-center justify-center border-4 border-dashed border-orange-200 animate-pulse-slow">
                        <span class="text-8xl">📦</span>
                    </div>
                </div>
            </div>
        </div>
    `,

    quizPool: [
        { level: 1, question: "Hình khai triển của hình trụ gồm mặt bên là hình gì?", options: ["Hình vuông", "Hình tròn", "Hình chữ nhật", "Hình tam giác"], answer: 2 },
        { level: 1, question: "Có bao nhiêu hình khai triển cơ bản của hình lập phương?", options: ["6 hình", "8 hình", "11 hình", "12 hình"], answer: 2 },
        { level: 1, question: "Một hình khai triển của hình lập phương có mấy mặt?", options: ["4 mặt", "6 mặt", "8 mặt", "5 mặt"], answer: 1 },
        { level: 2, question: "Khi khai triển hình hộp chữ nhật, ta thu được bao nhiêu hình chữ nhật?", options: ["4 hình", "6 hình", "8 hình", "12 hình"], answer: 1 },
        { level: 1, question: "Hình khai triển của hình trụ gồm mấy hình tròn đáy?", options: ["1 hình", "2 hình", "3 hình", "Không có hình nào"], answer: 1 },
        { level: 1, question: "Để gấp được một hình lập phương, các mặt trong hình khai triển phải là hình gì?", options: ["Hình chữ nhật", "Hình thoi", "Hình vuông", "Hình tam giác"], answer: 2 },
        { level: 2, question: "Hình khai triển của hình trụ có phần mặt bên là hình chữ nhật. Chiều dài hình chữ nhật đó bằng gì?", options: ["Chiều cao hình trụ", "Chu vi đáy hình trụ", "Đường kính đáy", "Bán kính đáy"], answer: 1 },
        { level: 2, question: "Nếu một hình khai triển chỉ có 5 hình vuông bằng nhau, ta có thể gấp thành hình lập phương không?", options: ["Có", "Không", "Tùy vào cách sắp xếp", "Chỉ gấp được một nửa"], answer: 1 },
        { level: 1, question: "Hình hộp chữ nhật là trường hợp đặc biệt của hình lập phương, đúng hay sai?", options: ["Đúng", "Sai", "Cả hai đều đúng", "Không xác định"], answer: 1 },
        { level: 2, question: "Trong hình khai triển của hình hộp chữ nhật, có mấy cặp mặt đối diện bằng nhau?", options: ["2 cặp", "3 cặp", "4 cặp", "6 cặp"], answer: 1 },
        { level: 3, question: "Diện tích toàn phần của hình lập phương bằng diện tích một mặt nhân với mấy?", options: ["Nhân 4", "Nhân 5", "Nhân 6", "Nhân 8"], answer: 2 },
        { level: 2, question: "Một hình khai triển gồm 6 hình vuông xếp thành hàng ngang liên tiếp có gấp được hình lập phương không?", options: ["Có", "Không", "Gấp được nếu cắt bớt", "Chỉ gấp được hình chữ nhật"], answer: 1 },
        { level: 3, question: "Hình khai triển của hình hộp chữ nhật có thể gồm các mặt là hình vuông không?", options: ["Không bao giờ", "Luôn luôn", "Có thể nếu là trường hợp đặc biệt", "Chỉ khi hình đó là hình trụ"], answer: 2 },
        { level: 2, question: "Khi gấp hình khai triển thành hình khối, các cạnh trùng nhau phải có độ dài như thế nào?", options: ["Khác nhau", "Bằng nhau", "Cạnh này gấp đôi cạnh kia", "Không quan trọng"], answer: 1 },
        { level: 3, question: "Hình nào sau đây KHÔNG PHẢI là hình khối cơ bản đã học?", options: ["Hình lập phương", "Hình hộp chữ nhật", "Hình cầu", "Hình trụ"], answer: 2 }
    ]
};
