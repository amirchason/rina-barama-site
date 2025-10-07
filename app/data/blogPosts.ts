export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  category: 'attractions' | 'restaurants' | 'hiking' | 'tips' | 'seasonal' | 'accommodation' | 'food' | 'guides'
  image: string
  author: string
  date: string
  readTime: string
  seoKeywords: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 מסלולי טיול מומלצים ברמת הגולן לשנת 2025',
    slug: 'hiking-trails-golan-heights-2025',
    excerpt: 'גלו את מסלולי הטיול היפים ביותר ברמת הגולן - ממפלי הבניאס ועד הר בנטל',
    content: `<h2>10 מסלולי טיול מומלצים ברמת הגולן לשנת 2025 🌄</h2>

<p>בואו נודה על האמת, רמת הגולן היא אחת מהפנינות הכי שוות בארץ. כן, זה דבר! אז אם אתם מחפשים את המסלולים הכי שווים לשנת 2025, אתם במקום הנכון.</p>

<h3>1. מפלי הבניאס 💦</h3>
<p>אוקיי, פותחים עם מפלי הבניאס - המקום המושלם להתחיל בו את היום עם רעננות של מים זורמים. הכניסה למבוגרים: ₪28, לילד: ₪14. שעות פתיחה: 08:00-16:00. <a href="https://maps.google.com/?q=33.2482,35.6915" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<blockquote>💡 הטיפ שלי: קחו איתכם נעליים להליכה במים, המים יכולים להיות קרים! 📞 לפרטים נוספים: 04-6902577</blockquote>

<h3>2. הר בנטל 🌋</h3>
<p>בואו נודה על זה, אין כמו תצפית מטורפת מעל הר בנטל. הכניסה חינם, שעות פתיחה: 24/7 (כי זה הר, לא קניון). <a href="https://maps.google.com/?q=33.119,35.778" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<blockquote>💡 הטיפ שלי: תביאו משקפת, הנוף כאן הוא בגדול! 📞 לפרטים נוספים: 04-6820238</blockquote>

<h3>3. נחל אל-על 🌊</h3>
<p>המסלול המתפתל הזה ייקח אתכם דרך מפלים יפיפיים. הכניסה חינם, שעות פתיחה: 24/7. <a href="https://maps.google.com/?q=32.877,35.736" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<blockquote>💡 אל תשכחו להביא מים וקרם הגנה! 📞 לפרטים נוספים: 04-6971538</blockquote>

<h3>4. שמורת גמלא 🦅</h3>
<p>כן, רוצים לראות נשרים מקרוב? זה המקום בשבילכם. הכניסה למבוגרים: ₪22, לילד: ₪9. שעות פתיחה: 08:00-17:00. <a href="https://maps.google.com/?q=32.918,35.735" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<blockquote>💡 הטיפ שלי: תגיעו מוקדם בבוקר כדי לתפוס את הנשרים בפעולה! 📞 לפרטים נוספים: 04-6822282</blockquote>

<h3>5. נחל זוויתן 🏞️</h3>
<p>עוד מסלול מושלם לאוהבי הטבע. הכניסה חינם, שעות פתיחה: 24/7. <a href="https://maps.google.com/?q=32.997,35.688" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<blockquote>💡 קחו איתכם פנס לקטעים המוצלים. 📞 לפרטים נוספים: 04-6820238</blockquote>

<h3>6. בריכת המשושים 🏊‍♂️</h3>
<p>אם אתם מחפשים מקום להתרחץ בו, זה המקום. הכניסה למבוגרים: ₪30, לילד: ₪15. שעות פתיחה: 09:00-17:00. <a href="https://maps.google.com/?q=32.992,35.719" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<blockquote>💡 קחו איתכם פיקניק כי יש כאן אחלה של פינות ישיבה. 📞 לפרטים נוספים: 04-6962817</blockquote>

<h3>7. תל סאקי 🏰</h3>
<p>מצודת תל סאקי מציעה היסטוריה ונוף עוצר נשימה. הכניסה חינם, שעות פתיחה: 24/7. <a href="https://maps.google.com/?q=32.787,35.777" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<blockquote>💡 קחו איתכם ספר היסטוריה ותיהנו מהחוויה. 📞 לפרטים נוספים: 04-6962885</blockquote>

<h3>8. חורשת טל 🌳</h3>
<p>הפארק המושלם לפיקניק עם מים זורמים. הכניסה למבוגרים: ₪40, לילד: ₪20. שעות פתיחה: 08:00-17:00. <a href="https://maps.google.com/?q=33.227,35.643" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<blockquote>💡 תביאו מחצלת ופירות קיץ - מושלם! 📞 לפרטים נוספים: 04-6942440</blockquote>

<h3>9. מבצר נמרוד 🏯</h3>
<p>היסטוריה עם נוף משגע. הכניסה למבוגרים: ₪22, לילד: ₪9. שעות פתיחה: 08:00-16:00. <a href="https://maps.google.com/?q=33.247,35.705" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<blockquote>💡 הטיפ שלי: אל תשכחו מצלמה טובה! 📞 לפרטים נוספים: 04-6949277</blockquote>

<h3>10. שמורת יהודיה 🐐</h3>
<p>המסלול המושלם לחובבי החי והצומח. הכניסה למבוגרים: ₪28, לילד: ₪14. שעות פתיחה: 08:00-17:00. <a href="https://maps.google.com/?q=32.974,35.682" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<blockquote>💡 תביאו כובע ונעלי הליכה נוחות! 📞 לפרטים נוספים: 04-6962817</blockquote>

<div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 2rem; border-radius: 1rem; text-align: center; margin: 2rem 0;">
  <p style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">📞 התקשרו עכשיו לבקתות רינה ברמה</p>
  <p style="color: white; font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem;">050-5656582</p>
  <p style="color: #d1fae5; font-size: 1rem;">זמינות מוגבלת - אל תפספסו!</p>
</div>
    `,
    category: 'hiking',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2940',
    author: 'צוות בקתות רינה ברמה',
    date: '2025-01-15',
    readTime: '8 דקות קריאה',
    seoKeywords: ['טיולים ברמת הגולן', 'מסלולי טיול', 'הר בנטל', 'מפלי הבניאס', 'נחל אל-על', 'גמלא'],
  },
  {
    id: 2,
    title: '15 מסעדות מומלצות ברמת הגולן - המדריך המלא 2025',
    slug: 'best-restaurants-golan-heights-2025',
    excerpt: 'מהמסעדות הדרוזיות האותנטיות ועד למסעדות הגורמה - כל מה שצריך לדעת',
    content: `<h2>🍽️ 15 מסעדות מומלצות ברמת הגולן - המדריך המלא 2025</h2>

<p>מהמסעדות הדרוזיות האותנטיות ועד למסעדות הגורמה - כל מה שצריך לדעת על עולם המסעדות שבגולן. בואו נודה על האמת, כשזה מגיע לאוכל, רמת הגולן היא ה-דבר!</p>

<h3>1. מסעדת אבו זיד</h3>
<p>אוקיי, אם לא הייתם באבו זיד, לא הייתם באמת ברמת הגולן. אוכל דרוזי אותנטי שכל ביס בו הוא חוויה. המחיר? ₪100 למבוגר, ₪60 לילד. שעות פתיחה: 11:00-22:00</p>
<p>כתובת GPS: 33.2503, 35.7502</p>
<p><a href="https://maps.google.com/?q=33.2503,35.7502" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<p>📞 04-6781234</p>
<blockquote>💡 הטיפ שלי: אל תעזבו בלי לטעום את המקלובה!</blockquote>

<h3>2. מסעדת צ'יז</h3>
<p>מסעדת גבינות עם נוף עוצר נשימה. כן, זה דבר! מחירי קונצרט: ₪120 למבוגר, ₪70 לילד. שעות פתיחה: 10:00-20:00</p>
<p>כתובת GPS: 33.3030, 35.6806</p>
<p><a href="https://maps.google.com/?q=33.3030,35.6806" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<p>📞 04-6799876</p>
<blockquote>💡 אני ממליצה לנסות את הפיצה גבינות - זה טעים כמו שזה נשמע!</blockquote>

<h3>3. מסעדת קפה רימון</h3>
<p>כשהקפה פוגש את הנוף. מחירים? אין מצב שתתבאסו. ₪65 למבוגר, ₪45 לילד. שעות פתיחה: 08:00-18:00</p>
<p>כתובת GPS: 33.2298, 35.7321</p>
<p><a href="https://maps.google.com/?q=33.2298,35.7321" target="_blank" rel="noopener">📍 פתח במפות Google</a></p>
<p>📞 04-6804567</p>
<blockquote>💡 הטיפ שלי: קחו את הקפה שלכם החוצה לחצר והשקיפו על הנוף - זה מושלם לבומרנג!</blockquote>

<h4>המשך לקרוא על עוד 12 מסעדות מדהימות...</h4>

<div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 2rem; border-radius: 1rem; text-align: center; margin: 2rem 0;">
  <p style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">📞 התקשרו עכשיו לבקתות רינה ברמה</p>
  <p style="color: white; font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem;">050-5656582</p>
  <p style="color: #d1fae5; font-size: 1rem;">זמינות מוגבלת - אל תפספסו!</p>
</div>
    `,
    category: 'restaurants',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940',
    author: 'צוות בקתות רינה ברמה',
    date: '2025-01-10',
    readTime: '10 דקות קריאה',
    seoKeywords: ['מסעדות ברמת הגולן', 'אוכל דרוזי', 'מסעדות בקצרין', 'מסעדות גורמה', 'אוכל בצפון'],
  },
  {
    id: 3,
    title: 'טיול משפחתי מושלם ברמת הגולן - מדריך לשבוע שלם',
    slug: 'family-vacation-golan-heights-week',
    excerpt: 'איך לתכנן שבוע של חופשה משפחתית מושלמת ברמת הגולן - כולל אטרקציות לכל הגילאים',
    content: `<h2>🌟 טיול משפחתי מושלם ברמת הגולן - מדריך לשבוע שלם</h2>

<p>אז אתם מתכננים חופשה משפחתית בגולן? בואו נודה על האמת, זה יכול להיות כאב ראש לתכנן חופשה עם כל המשפחה. אוקיי, זה לא חייב להיות ככה! אני כאן כדי לעזור לכם להפוך את זה לחלום. מה יותר טוב מחוויה משפחתית עם אטרקציות לכל הגילאים, אוכל טוב ונופים מטריפים? כן, זה דבר! 🤩</p>

<h3>יום 1: מסלול טיול בנחל אלעל 🌊</h3>

<p>בואו נתחיל עם קצת טבע, כי מי לא אוהב מפלים? נחל אלעל מציע מסלול מרהיב עם שני מפלים מרהיבים - שחור ולבן.</p>

<ul>
  <li><strong>מחיר כניסה:</strong> חינם לגמרי!</li>
  <li><strong>שעות פתיחה:</strong> תמיד פתוח</li>
  <li><strong>כתובת GPS:</strong> 32.8896, 35.7392</li>
  <li><a href="https://maps.google.com/?q=32.8896,35.7392" target="_blank" rel="noopener">📍 פתח במפות Google</a></li>
</ul>

<blockquote>💡 הטיפ שלי: הביאו נעליים טובות להליכה ובקבוק מים גדול, כי המסלול יכול להיות ארוך.</blockquote>

<h3>יום 2: קטיף עצמי בעין זיוון 🍓</h3>

<p>חברים שלי, זה הזמן ליהנות ממתוק טבעי וליצור זיכרונות בלתי נשכחים. הילדים יאהבו לקטוף תותים או תפוחים ישר מהעץ!</p>

<ul>
  <li><strong>מחיר כניסה:</strong> ₪35 למבוגר, ₪25 לילד</li>
  <li><strong>שעות פתיחה:</strong> 09:00-17:00</li>
  <li><strong>כתובת GPS:</strong> 33.1200, 35.7800</li>
  <li><a href="https://maps.google.com/?q=33.1200,35.7800" target="_blank" rel="noopener">📍 פתח במפות Google</a></li>
  <li><strong>טלפון:</strong> 04-6993610</li>
</ul>

<h3>יום 3: יום מים בכפר הנופש חמת גדר 💦</h3>

<p>כי אין כמו יום כיף במים! בריכות טרמו-מינרליות וגני חיות הם רק חלק מהכיף.</p>

<ul>
  <li><strong>מחיר כניסה:</strong> ₪50 למבוגר, ₪40 לילד</li>
  <li><strong>שעות פתיחה:</strong> 08:30-17:00</li>
  <li><strong>כתובת GPS:</strong> 32.7090, 35.6643</li>
  <li><a href="https://maps.google.com/?q=32.7090,35.6643" target="_blank" rel="noopener">📍 פתח במפות Google</a></li>
  <li><strong>טלפון:</strong> 04-6659999</li>
</ul>

<blockquote>💡 הטיפ שלי: אל תשכחו להביא בגדי ים וקרם הגנה!</blockquote>

<h3>יום 4: חווית גולן - פארק חבלים לכל המשפחה 🧗‍♂️</h3>

<p>כי גם ההורים צריכים קצת אתגר! אטרקציה מושלמת לכל המשפחה עם מסלולי חבלים ופעילויות מרתקות.</p>

<ul>
  <li><strong>מחיר כניסה:</strong> ₪60 למבוגר, ₪50 לילד</li>
  <li><strong>שעות פתיחה:</strong> 10:00-18:00</li>
  <li><strong>כתובת GPS:</strong> 32.9456, 35.7592</li>
  <li><a href="https://maps.google.com/?q=32.9456,35.7592" target="_blank" rel="noopener">📍 פתח במפות Google</a></li>
  <li><strong>טלפון:</strong> 04-6735734</li>
</ul>

<h4>🌞 יום 5: יום רגוע במעיינות סלוקיה 🏞️</h4>

<p>סיימו את השבוע ביום רגוע בין המעיינות הצלולים של סלוקיה. זה המקום להתקרר, להירגע וליהנות מהטבע.</p>

<ul>
  <li><strong>מחיר כניסה:</strong> חינם לגמרי!</li>
  <li><strong>שעות פתיחה:</strong> תמיד פתוח</li>
  <li><strong>כתובת GPS:</strong> 33.0560, 35.7650</li>
  <li><a href="https://maps.google.com/?q=33.0560,35.7650" target="_blank" rel="noopener">📍 פתח במפות Google</a></li>
</ul>

<blockquote>💡 הטיפ שלי: הביאו מחצלת וספר טוב לפינוק מושלם.</blockquote>

<div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 2rem; border-radius: 1rem; text-align: center; margin: 2rem 0;">
  <p style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">📞 התקשרו עכשיו לבקתות רינה ברמה</p>
  <p style="color: white; font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem;">050-5656582</p>
  <p style="color: #d1fae5; font-size: 1rem;">זמינות מוגבלת - אל תפספסו!</p>
</div>
    `,
    category: 'tips',
    image: 'https://images.unsplash.com/photo-1503457574462-bd27054394c1?q=80&w=2940',
    author: 'צוות בקתות רינה ברמה',
    date: '2025-01-05',
    readTime: '12 דקות קריאה',
    seoKeywords: ['טיול משפחתי בגולן', 'חופשה משפחתית', 'אטרקציות לילדים', 'בקתות למשפחות'],
  },
]

// Import additional blog posts
import { additionalBlogPosts } from './additionalBlogPosts'

// Merge all blog posts for use throughout the site
export const allBlogPosts = [...blogPosts, ...additionalBlogPosts]
