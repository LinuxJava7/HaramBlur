// Language dictionary containing translations for English and Arabic
const getTranslations = (settings) => {
	return {
		en: {
			// English translations
			"#settings": "Settings",
			"#blurryStart": "Blur media on load:",
			".tooltiptext":
				"When enabled, all images and videos will be blurred by default until detection starts.",
			"#blurAmount": `
			Blur Amount:
			<span id="blur-amount-value">${settings.blurAmount}%</span>
		`,
			"#grayscale": "Grayscale:",
			"#strictness": `Strictness:
		<span id="strictness-value">${settings.strictness * 100}%</span>
		`,
			"#mediaToBlur": "Media to Blur",
			"#blurImages": "Images",
			"#blurVideos": "Videos",
			"#facesToBlur": "Faces to Blur",
			"#blurMale": "Male",
			"#blurFemale": "Female",
			"#unblurOnHover": "Unblur on hover",
			"#unblurImages": "Images",
			"#unblurVideos": "Videos",
			".refresh": " (requires page refresh):",
			"#refresh-message": "Refresh the page to see the changes.",
			".bmc-btn-text": "Help keep us going",
			".feedback": `
			<span> We love to hear your feedback through our </span> <a href="https://forms.gle/mDDjh44MKRVemWX86" target="_blank">Form</a> or 
			<a href="mailto:md.alganzory@gmail.com" target="_blank">Email</a> ❤️
			`,
			"#whitelist-desc": `
				<p id="whitelist-desc"> Detection is 
				<span id="whitelist-status-on" class="blue-text"> On </span> 
				<span id="whitelist-status-off" class="red-text hidden" > Off </span> 
				for this website </p>
			`
		},
		ar: {
			// Arabic translations
			"#settings": "الإعدادات",
			"#blurryStart": "تشويش الوسائط مسبقا:",
			".tooltiptext":
				"عند تفعيل هذا الخيار سيتم تشويش جميع الصور ومقاطع الفيديو مسبقا حتى يبدأ الكشف.",
			"#blurAmount": `
			كمية التشويش:
			<span id="blur-amount-value">${settings.blurAmount}%</span>
		`,
			"#grayscale": "رمادي:",
			"#strictness": `الدقة:
		<span id="strictness-value">${settings.strictness * 100}%</span>
		`,
			"#mediaToBlur": "الوسائط التي يجب تشويشها",
			"#blurImages": "الصور",
			"#blurVideos": "مقاطع الفيديو",
			"#facesToBlur": "الوجوه التي يجب تشويشها",
			"#blurMale": "الذكور",
			"#blurFemale": "الإناث",
			"#unblurOnHover": "إلغاء التشويش عند المرور بالمؤشر ",
			"#unblurImages": "الصور",
			"#unblurVideos": "مقاطع الفيديو",
			".refresh": " (يتطلب إعادة تحميل الصفحة):",
			"#refresh-message": "أعد تحميل الصفحة لترى التغييرات.",
			".bmc-btn-text": "ساعدنا على الاستمرار",
			".feedback": `
			<span> نحب أن نسمع رأيك عبر </span> <a href="https://forms.gle/mDDjh44MKRVemWX86" target="_blank">الاستمارة</a> أو 
			<a href="mailto:md.alganzory@gmail.com" target="_blank">البريد الإلكتروني</a> ❤️
			`,
			"#whitelist-desc": `
				<p id="whitelist-desc"> الفحص 
				<span id="whitelist-status-on" class="blue-text"> مفعل </span> 
				<span id="whitelist-status-off" class="red-text hidden" > معطل </span> 
				لهذا الموقع </p>
			`
		},
		// turkish
		tr: {
			"#settings": "Ayarlar",
			"#blurryStart": "Yüklenirken bulanıklaştır",
			".tooltiptext":
				"Etkinleştirildiğinde, tüm resimler ve videolar, algılama başlayana kadar varsayılan olarak bulanıklaştırılır.",
			"#blurAmount": `
			Bulanıklaştırma seviyesi:
			<span id="blur-amount-value">${settings.blurAmount}%</span>
		`,
			"#grayscale": "Grileştir:",
			"#strictness": `Katılık:
		<span id="strictness-value">${settings.strictness * 100}%</span>
		`,
			"#mediaToBlur": "Bulanıklaştırılacak medya",
			"#blurImages": "Resimler",
			"#blurVideos": "Videolar",
			"#facesToBlur": "Bulanıklaştırılacak yüzler",
			"#blurMale": "Erkek",
			"#blurFemale": "Kadın",
			"#unblurOnHover": "Üzerine gelindiğinde bulanıklığı kaldır",
			"#unblurImages": "Resimler",
			"#unblurVideos": "Videolar",
			".refresh": " (sayfa yenileme gerektirir):",
			"#refresh-message": "Değişiklikleri görmek için sayfayı yenile.",
			".bmc-btn-text": "Devam etmemize yardımcı olun",
			".feedback": `
			<span> Geri dönüşlerinizi </span> <a href="https://forms.gle/mDDjh44MKRVemWX86" target="_blank">Form</a> ve
			<a href="mailto:md.alganzory@gmail.com" target="_blank">E-mail</a> yoluyla bize bildirin.❤️
			`,
			"#whitelist-desc": `
				<p id="whitelist-desc"> Bu web sitesi için algılama
				<span id="whitelist-status-on" class="blue-text"> Açık </span> 
				<span id="whitelist-status-off" class="red-text hidden" > Kapalı </span> 
				</p>
			`
		},
	};
};

const HB_TRANSLATIONS_DIR = {
	en: "ltr",
	tr: "ltr",
	ar: "rtl",
};
