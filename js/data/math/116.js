export const lesson116 = {
    id: "116",
    period: "116",
    title: "Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ",
    subject: "math",
    week: "23",
    objective: "Mô tả được hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ.",

    content: `
        <div class="space-y-6">
            <div class="glass-card p-6 bg-yellow-50 border-l-8 border-yellow-500 rounded-r-3xl mb-6">
                <h4 class="text-xl font-black text-yellow-800 mb-4 flex items-center gap-2">
                    <span class="text-3xl">🔍</span> Khám phá: Hình khai triển
                </h4>
                <p class="text-2xl leading-relaxed mb-4 font-bold text-gray-800 bg-yellow-100 p-4 rounded-xl border border-yellow-200 shadow-sm">
                    "Khi 'trải' các mặt của một hình hộp chữ nhật, hình lập phương hay hình trụ lên một mặt phẳng, ta được <span class="text-yellow-700">hình khai triển</span> của hình đó."
                </p>
            </div>

            <div class="glass-card p-6 bg-green-50 border-l-8 border-green-500 rounded-r-3xl">
                <h4 class="text-2xl font-black text-green-800 mb-4">A. Hình khai triển của hình hộp chữ nhật</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
                    <div class="bg-white p-4 rounded-2xl shadow-sm border-2 border-green-100 flex flex-col items-center">
                        <span class="text-sm font-black uppercase text-green-400 mb-2">Mô hình 3D</span>
                        <div class="w-full h-48 flex items-center justify-center bg-gray-50 rounded-xl">
                            [[CUBOID3D|Hình hộp chữ nhật]]
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-2xl shadow-sm border-2 border-green-100 flex flex-col items-center justify-center h-full">
                        <span class="text-sm font-black uppercase text-green-400 mb-2">Hình khai triển</span>
                        <p class="text-2xl text-green-700 font-bold text-center mt-6">Gồm 6 hình chữ nhật</p>
                        <p class="text-lg text-gray-500 text-center mt-2">(4 mặt bên và 2 mặt đáy)</p>
                    </div>
                </div>
            </div>

            <div class="glass-card p-6 bg-blue-50 border-l-8 border-blue-500 rounded-r-3xl">
                <h4 class="text-2xl font-black text-blue-800 mb-4">B. Hình khai triển của hình lập phương</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
                    <div class="bg-white p-4 rounded-2xl shadow-sm border-2 border-blue-100 flex flex-col items-center">
                        <span class="text-sm font-black uppercase text-blue-400 mb-2">Mô hình 3D</span>
                        <div class="w-full h-48 flex items-center justify-center bg-gray-50 rounded-xl">
                            [[CUBE3D|Hình lập phương]]
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-2xl shadow-sm border-2 border-blue-100 flex flex-col items-center justify-center h-full">
                        <span class="text-sm font-black uppercase text-blue-400 mb-2">Hình khai triển</span>
                        <svg width="200" height="150" viewBox="0 0 200 150" class="drop-shadow-md mt-2">
                            <rect x="70" y="10" width="30" height="30" fill="#3B82F6" stroke="white" stroke-width="1"/>
                            <rect x="40" y="40" width="30" height="30" fill="#3B82F6" stroke="white" stroke-width="1"/>
                            <rect x="70" y="40" width="30" height="30" fill="#1D4ED8" stroke="white" stroke-width="1"/>
                            <rect x="100" y="40" width="30" height="30" fill="#3B82F6" stroke="white" stroke-width="1"/>
                            <rect x="70" y="70" width="30" height="30" fill="#3B82F6" stroke="white" stroke-width="1"/>
                            <rect x="70" y="100" width="30" height="30" fill="#3B82F6" stroke="white" stroke-width="1"/>
                        </svg>
                        <p class="text-xl text-blue-700 font-bold mt-4">Gồm 6 hình vuông bằng nhau</p>
                    </div>
                </div>
            </div>

            <div class="glass-card p-6 bg-emerald-50 border-l-8 border-emerald-500 rounded-r-3xl">
                <h4 class="text-2xl font-black text-emerald-800 mb-4">C. Hình khai triển của hình trụ</h4>
                <div class="bg-white p-6 rounded-2xl shadow-sm border-2 border-emerald-100 mt-4">
                     <div class="flex flex-col md:flex-row justify-around items-center gap-8">
                        <div class="text-center">
                            <div class="w-24 h-32 bg-emerald-200 border-4 border-emerald-500 rounded-full relative mx-auto overflow-hidden">
                                <div class="absolute top-0 w-full h-8 bg-emerald-400/50 border-b-2 border-emerald-500"></div>
                                <div class="absolute bottom-0 w-full h-8 bg-emerald-400/50 border-t-2 border-emerald-500"></div>
                            </div>
                            <p class="text-lg font-black text-emerald-600 mt-3">Hình trụ</p>
                        </div>
                        <div class="text-blue-400 animate-pulse text-4xl">➜</div>
                        <div class="text-center">
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 rounded-full bg-emerald-300 border-2 border-emerald-500 mb-2"></div>
                                <div class="w-40 h-20 bg-emerald-400 border-2 border-emerald-600 rounded-md"></div>
                                <div class="w-12 h-12 rounded-full bg-emerald-300 border-2 border-emerald-500 mt-2"></div>
                            </div>
                            <div class="mt-4 space-y-1">
                                <p class="text-lg text-emerald-800">Mặt bên là <b>hình chữ nhật</b></p>
                                <p class="text-lg text-emerald-800">Hai mặt đáy là <b>hình tròn</b></p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    `,

    practice: `
        <div class="space-y-8">
            <div class="bg-white p-6 md:p-10 rounded-[32px] shadow-xl border-4 border-blue-100 animate-fade-in relative overflow-hidden">
                <h4 class="text-3xl font-black text-blue-800 mb-6 flex items-center gap-4 border-b-4 border-blue-200 pb-4">
                    <span class="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-300 text-2xl">1</span>
                    Tìm miếng bìa thích hợp
                </h4>
                <div class="space-y-6">
                    <p class="text-2xl font-bold text-gray-800 leading-relaxed bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-sm">
                        Tìm miếng bìa và hình khai triển thích hợp với mỗi chiếc đèn lồng:
                    </p>
                    <div class="flex justify-center mb-6">
                        <img src="hinh_anh/toan_tap_2/116_b1_de.png" class="max-w-full rounded-2xl shadow-md border-2 border-gray-100" alt="Các đèn lồng">
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
                        <div class="flex flex-col items-center bg-green-50 p-6 rounded-2xl border-2 border-green-200 shadow-sm">
                            <span class="font-black text-green-700 mb-4 text-xl bg-green-200 px-4 py-1 rounded-full">Miếng bìa A</span>
                            <img src="hinh_anh/toan_tap_2/116_b1_a.png" class="w-full max-w-[200px] object-contain rounded my-auto">
                        </div>
                        <div class="flex flex-col items-center bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-200 shadow-sm">
                            <span class="font-black text-yellow-700 mb-4 text-xl bg-yellow-200 px-4 py-1 rounded-full">Miếng bìa B</span>
                            <img src="hinh_anh/toan_tap_2/116_b1_b.png" class="w-full max-w-[200px] object-contain rounded my-auto">
                        </div>
                        <div class="flex flex-col items-center bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 shadow-sm">
                            <span class="font-black text-blue-700 mb-4 text-xl bg-blue-200 px-4 py-1 rounded-full">Miếng bìa C</span>
                            <img src="hinh_anh/toan_tap_2/116_b1_c.png" class="w-full max-w-[200px] object-contain rounded my-auto">
                        </div>
                    </div>
                    <div class="space-y-4 bg-gray-50 p-6 rounded-2xl border-2 border-gray-200 text-xl font-semibold">
                        [[MATH_EX|p1a|options|label|Đèn lồng hình hộp chữ nhật (xanh lá) ghép với: |Miếng bìa A, Miếng bìa B, Miếng bìa C|Miếng bìa A]]
                        [[MATH_EX|p1b|options|label|Đèn lồng hình lập phương (vàng) ghép với: |Miếng bìa A, Miếng bìa B, Miếng bìa C|Miếng bìa B]]
                        [[MATH_EX|p1c|options|label|Đèn lồng hình trụ (xanh dương) ghép với: |Miếng bìa A, Miếng bìa B, Miếng bìa C|Miếng bìa C]]
                    </div>
                </div>
            </div>

            <div class="bg-white p-6 md:p-10 rounded-[32px] shadow-xl border-4 border-pink-100 animate-fade-in relative overflow-hidden">
                <h4 class="text-3xl font-black text-pink-800 mb-6 flex items-center gap-4 border-b-4 border-pink-200 pb-4">
                    <span class="bg-pink-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-300 text-2xl">2</span>
                    Hình khai triển của đèn lồng cá
                </h4>
                <div class="space-y-6">
                    <div class="flex flex-col lg:flex-row gap-8 items-center">
                        <div class="lg:w-1/3 text-2xl font-bold text-gray-800 leading-relaxed bg-pink-50 p-6 rounded-2xl border border-pink-200 shadow-sm">
                            "Rô-bốt muốn làm một chiếc đèn lồng hình con cá như hình bên. Hỏi Rô-bốt cần dùng miếng bìa nào dưới đây?"
                        </div>
                        <div class="lg:w-2/3 flex flex-col gap-4">
                            <img src="hinh_anh/toan_tap_2/116_b2_robot.png" class="w-full max-w-lg mx-auto rounded-2xl shadow-md border-2 border-pink-100" alt="Rô-bốt và lồng đèn cá">
                        </div>
                    </div>
                    <div class="mt-8 flex justify-center">
                        <img src="hinh_anh/toan_tap_2/116_b2_shapes.png" class="w-full max-w-4xl rounded-3xl shadow-md border-2 border-gray-200 bg-gray-50 object-contain p-4" alt="Các miếng bìa A, B, C, D">
                    </div>
                    <div class="bg-pink-50 p-6 rounded-2xl border-2 border-pink-200 text-xl font-semibold text-pink-900 mt-6 flex flex-col md:flex-row items-center gap-4">
                        [[MATH_EX|p2|options|label|Chọn miếng bìa Rô-bốt cần dùng (A, B, C, D): |A, B, C, D|C]]
                    </div>
                </div>
            </div>

            <div class="bg-white p-6 md:p-10 rounded-[32px] shadow-xl border-4 border-orange-100 animate-fade-in relative">
                <h4 class="text-3xl font-black text-orange-800 mb-6 flex items-center gap-4 border-b-4 border-orange-200 pb-4">
                    <span class="bg-orange-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-300 text-2xl">3</span>
                    Hình khai triển của hình trụ
                </h4>
                <div class="space-y-6">
                    <p class="text-2xl font-bold text-gray-800 leading-relaxed bg-orange-50 p-6 rounded-2xl border border-orange-200 shadow-sm">
                        Hình nào dưới đây là hình khai triển của hình trụ?
                    </p>
                    <div class="flex justify-center gap-4 md:gap-8 flex-wrap py-4 bg-gray-50 rounded-3xl border-2 border-gray-100 shadow-inner">
                        <img src="hinh_anh/toan_tap_2/116_b3_a.png" class="max-h-[300px] object-contain shadow-sm border border-gray-200 bg-white p-3 rounded-2xl">
                        <img src="hinh_anh/toan_tap_2/116_b3_b.png" class="max-h-[300px] object-contain shadow-sm border border-gray-200 bg-white p-3 rounded-2xl">
                        <img src="hinh_anh/toan_tap_2/116_b3_c.png" class="max-h-[300px] object-contain shadow-sm border border-gray-200 bg-white p-3 rounded-2xl">
                    </div>
                    <div class="bg-orange-50 p-6 rounded-2xl border-2 border-orange-200 text-xl font-semibold text-orange-900 mt-6 flex flex-col md:flex-row items-center gap-4">
                        [[MATH_EX|p3|options|label|Chọn đáp án đúng (tương ứng với hình A, B, C, D trong SGK): |A, B, C, D|C]]
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
