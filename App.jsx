 import { useState, useEffect } from 'react'
import './App.css'

/* ---------- ДАННЫЕ ---------- */
const routes = [['home','Главная'],['services','Услуги'],['work','Проекты'],['about','О нас'],['team','Команда'],['pricing','Цены'],['reviews','Отзывы'],['blog','Блог'],['faq','FAQ'],['contact','Контакты']]
const grads = ['linear-gradient(135deg,#4f46e5,#06b6d4)','linear-gradient(135deg,#f43f5e,#f59e0b)','linear-gradient(135deg,#10b981,#3b82f6)','linear-gradient(135deg,#8b5cf6,#ec4899)','linear-gradient(135deg,#0ea5e9,#22c55e)','linear-gradient(135deg,#f97316,#eab308)']
const services = [['🎨','Дизайн интерфейсов','Исследования, прототипы и дизайн-системы.'],['⚛️','Веб-разработка','React, быстрые сайты и приложения.'],['📱','Мобильные продукты','Приложения для iOS и Android.'],['🛒','E-commerce','Магазины с удобной корзиной и оплатой.'],['✨','Брендинг','Логотип, айдентика и гайдлайны.'],['📈','Рост и аналитика','SEO, A/B-тесты и понятные метрики.']]
const works = [['Сайты','Финтех-платформа','Конверсия выросла на 34%.'],['Приложения','Фитнес-трекер','200 тысяч пользователей.'],['Магазины','Мебельный бутик','Заказов стало вдвое больше.'],['Сайты','Школа языков','Лендинг и личный кабинет.'],['Брендинг','Кофейня «Утро»','Айдентика для сети из 12 точек.'],['Приложения','Сервис доставки','Приложение курьера с офлайн-режимом.']]
const team = [['Анна Ветрова','Арт-директор'],['Игорь Саров','Технический директор'],['Мария Коль','Ведущий дизайнер'],['Тимур Алиев','Frontend-разработчик'],['Лена Орлова','Продакт-менеджер'],['Олег Миров','Аналитик']]
const posts = [['Дизайн','Как собрать дизайн-систему за две недели','8 мин'],['Код','React без лишнего: советы по скорости','6 мин'],['Бизнес','Что спросить у студии до старта','5 мин'],['Дизайн','Типографика, которая продаёт','7 мин'],['Код','Доступность интерфейсов: чек-лист','9 мин'],['Бизнес','Как измерять отдачу от редизайна','6 мин']]
const reviews = [['Сайт стал быстрее вдвое, заявок заметно больше.','Дмитрий К., основатель стартапа'],['Сроки и бюджет совпали с планом.','Светлана Р., директор по маркетингу'],['Дизайн-систему внедрили за месяц.','Артём Л., CTO'],['Объясняют решения, а не просто рисуют.','Ольга М., владелица магазина']]
const faq = [['Сколько длится проект?','Лендинг 2–3 недели, сайт 6–10 недель, продукт от 3 месяцев.'],['Как строится оплата?','40% на старте, 30% после дизайна, 30% при запуске.'],['Есть ли поддержка после запуска?','Да, тарифы с мониторингом и правками.'],['Можно начать с малого?','Да, например с аудита или прототипа.'],['С какими технологиями работаете?','React, Node.js, Swift, Kotlin.']]
const stats = [['120+','проектов'],['9 лет','на рынке'],['98%','возвращаются'],['24 ч','средний ответ']]
const plans = [['Старт',60,['Лендинг до 5 экранов','Адаптивный дизайн','Базовое SEO']],['Бизнес',150,['До 10 страниц','Админ-панель','Аналитика','Поддержка 3 месяца'],true],['Продукт',380,['Веб-приложение','Дизайн-система','Выделенная команда','Поддержка 12 месяцев']]]

/* ---------- 10 КОМПОНЕНТОВ ---------- */
function Nav({ page }) {
  const [open, setOpen] = useState(false)
  return (
    <header><div className="w nav">
      <a className="logo" href="#home">North<b>light</b></a>
      <button className="burger" onClick={() => setOpen(!open)}>Меню</button>
      <nav className={'links' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
        {routes.map(([id, t]) => <a key={id} href={'#' + id} className={page === id ? 'on' : ''}>{t}</a>)}
      </nav>
    </div></header>
  )
}
function Footer() {
  const col = (a) => <div>{a.map(([id, t]) => <a key={id} href={'#' + id}>{t}</a>)}</div>
  return (
    <footer><div className="w fg">
      <div><div className="logo">North<b>light</b></div><p>Цифровая студия: сайты, продукты, брендинг.</p></div>
      {col(routes.slice(0, 5))}{col(routes.slice(5))}
    </div><div className="w" style={{ marginTop: 24 }}>© 2026 Nordlight</div></footer>
  )
}
function Hero() {
  return (
    <div className="hero"><div className="w">
      <span className="tag">Цифровая студия · с 2017</span>
      <h1>Создаём цифровые продукты, <span>которыми приятно пользоваться</span></h1>
      <p>Дизайн, разработка и рост под одной крышей.</p>
      <div className="row"><a className="btn" href="#contact">Начать проект</a><a className="btn g" href="#work">Смотреть работы</a></div>
    </div></div>
  )
}
function Section({ children }) { return <div className="sec"><div className="w">{children}</div></div> }
function Head({ title, text }) {
  return <div className="sec" style={{ paddingBottom: 0 }}><div className="w"><h2>{title}</h2><p className="lead">{text}</p></div></div>
}
function Cards({ items }) {
  return <div className="grid">{items.map(([icon, title, text]) => (
    <div className="card" key={title}><div className="ic">{icon}</div><h3>{title}</h3><p>{text}</p></div>
  ))}</div>
}
function Stats() {
  return <Section><div className="grid">{stats.map(([n, t]) => <div className="stat" key={t}><b>{n}</b><p>{t}</p></div>)}</div></Section>
}
function Cta() {
  return <Section><div className="cta"><h2>Расскажите о своей идее</h2><p>Ответим в течение дня.</p><a className="btn" href="#contact">Обсудить проект</a></div></Section>
}
function Tabs({ items, value, onChange }) {
  return <div className="tabs">{items.map(t => <button key={t} className={value === t ? 'on' : ''} onClick={() => onChange(t)}>{t}</button>)}</div>
}
function Accordion({ items }) {
  return <>{items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</>
}
function ContactForm() {
  const [sent, setSent] = useState(false)
  if (sent) return <div className="card"><h3>Спасибо!</h3><p>Заявка принята, скоро свяжемся.</p></div>
  return (
    <form className="card" onSubmit={e => { e.preventDefault(); setSent(true) }}>
      <input required placeholder="Ваше имя" /><input required type="email" placeholder="Email" />
      <select><option>Сайт</option><option>Приложение</option><option>Брендинг</option></select>
      <textarea rows="5" placeholder="Расскажите о задаче" />
      <button className="btn" type="submit">Отправить</button>
    </form>
  )
}

/* ---------- ДОПОЛНИТЕЛЬНЫЕ ДАННЫЕ ---------- */
const allWorks = [...works, ['Сайты','Юридическая фирма','Новый сайт и онлайн-запись на консультации.'],['Магазины','Магазин электроники','Каталог на 5 000 товаров с быстрым поиском.'],['Приложения','Банк для фрилансеров','Мобильный банк с аналитикой расходов.']]
const allTeam = [...team, ['Софья Ким','Копирайтер'],['Павел Рид','Backend-разработчик']]
const allPosts = [...posts, ['Код','Состояние в React: когда хватит useState','7 мин'],['Дизайн','Цвет в интерфейсах: палитра за час','5 мин'],['Бизнес','Почему сайт не приносит заявок','8 мин']]
const allReviews = [...reviews, ['Запустились за 7 недель, как и обещали.','Никита В., директор по продукту'],['Лучший подрядчик, с которым мы работали.','Елена Т., основатель школы']]
const allFaq = [...faq, ['Вы работаете по договору?','Да, договор, акты и фиксированные этапы.'],['Передаёте ли исходники?','Да, весь код и макеты принадлежат вам.'],['Работаете ли вы с зарубежными клиентами?','Да, в 14 странах, на русском и английском.']]
const counters = [[120,'+','проектов запущено'],[9,' лет','на рынке'],[98,'%','клиентов возвращаются'],[24,' ч','средний ответ']]
const logos = ['Apex','Lumen','Northwind','Orbit','Helix','Vertex']
const rows = [['Количество страниц','до 5','до 10','без лимита'],['Дизайн-система','—','✓','✓'],['Админ-панель','—','✓','✓'],['Аналитика и A/B-тесты','—','✓','✓'],['Выделенная команда','—','—','✓'],['Поддержка','1 мес.','3 мес.','12 мес.']]

/* ---------- ЕЩЁ КОМПОНЕНТЫ ---------- */
function Counter({ to, suffix, label }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let v = 0; const step = Math.max(1, Math.ceil(to / 40))
    const id = setInterval(() => { v += step; if (v >= to) { v = to; clearInterval(id) } setN(v) }, 30)
    return () => clearInterval(id)
  }, [to])
  return <div className="stat"><b>{n}{suffix}</b><p>{label}</p></div>
}
function Counters() { return <Section><div className="grid">{counters.map(([n, s, l]) => <Counter key={l} to={n} suffix={s} label={l} />)}</div></Section> }
function Logos() { return <Section><p className="center">Нам доверяют</p><div className="logos">{logos.map(l => <span key={l}>{l}</span>)}</div></Section> }
function Split({ tag, title, text, points, flip, g = 0 }) {
  return <Section><div className={'split' + (flip ? ' flip' : '')}>
    <div><span className="tag">{tag}</span><h2>{title}</h2><p>{text}</p><ul className="chk">{points.map(p => <li key={p}>{p}</li>)}</ul></div>
    <div className="vis" style={{ background: grads[g] }}><div className="mock"><i /><i /><i /></div></div>
  </div></Section>
}
function Slider({ items }) {
  const [i, setI] = useState(0)
  useEffect(() => { const id = setInterval(() => setI(x => (x + 1) % items.length), 4500); return () => clearInterval(id) }, [items.length])
  const [t, a] = items[i]
  return <Section><div className="card slider"><p className="big">“{t}”</p><p>— {a}</p>
    <div className="dots">{items.map((_, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={'Отзыв ' + (k + 1)} />)}</div></div></Section>
}
function Newsletter() {
  const [ok, setOk] = useState(false)
  return <Section><div className="card news"><div><h3>Письма раз в месяц</h3><p>Кейсы, идеи и разборы. Без спама.</p></div>
    {ok ? <p className="ok">Вы подписаны ✓</p> : <form onSubmit={e => { e.preventDefault(); setOk(true) }}><input required type="email" placeholder="Ваш email" /><button className="btn">Подписаться</button></form>}</div></Section>
}
function Table() {
  return <Section><div className="tw"><table><thead><tr><th>Возможности</th><th>Старт</th><th>Бизнес</th><th>Продукт</th></tr></thead>
    <tbody>{rows.map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody></table></div></Section>
}
function WorkGrid({ list }) {
  return <div className="grid">{list.map(([c, t, d]) => (
    <div className="card hov" key={t}><div className="thumb" style={{ background: grads[allWorks.findIndex(w => w[1] === t) % 6] }} /><span className="tag">{c}</span><h3>{t}</h3><p>{d}</p></div>
  ))}</div>
}

/* ---------- 10 СТРАНИЦ ---------- */
function Home() {
  return <><Hero /><Logos /><Counters />
    <Head title="Что мы делаем" text="Полный цикл от идеи до поддержки." /><Section><Cards items={services} /></Section>
    <Split tag="Подход" title="Дизайн, который работает на бизнес" text="Каждое решение проверяем данными и тестами." points={['Исследования аудитории','Прототипы за неделю','Дизайн-система под ключ']} g={0} />
    <Split flip tag="Разработка" title="Быстро, надёжно, без хаоса" text="Чистый код, спринты и демо каждые две недели." points={['React и современный стек','Автотесты и CI','Поддержка после запуска']} g={2} />
    <Head title="Свежие проекты" text="Несколько работ из портфолио." /><Section><WorkGrid list={allWorks.slice(0, 3)} /><p style={{ marginTop: 20 }}><a className="btn g" href="#work">Все проекты</a></p></Section>
    <Head title="Отзывы клиентов" text="Что они говорят о работе с нами." /><Slider items={allReviews} /><Newsletter /><Cta /></>
}
function Services() {
  const steps = [['1. Погружение','Изучаем бизнес и аудиторию.'],['2. Дизайн','Прототипы и визуальный стиль.'],['3. Разработка','Спринты с демо каждые две недели.'],['4. Запуск','Тесты, релиз, обучение команды.'],['5. Рост','Аналитика и улучшения после релиза.']]
  return <><Head title="Услуги" text="Выберите направление или соберите команду под ключ." /><Section><Cards items={services} /></Section>
    <Split tag="Под ключ" title="Одна команда от идеи до релиза" text="Не нужно искать отдельно дизайнера, разработчика и аналитика." points={['Единый менеджер проекта','Фиксированные сроки','Прозрачная отчётность']} g={1} />
    <Head title="Как мы работаем" text="Прозрачный процесс без сюрпризов." /><Section><div className="tl">{steps.map(([t, s]) => <div key={t}><h3>{t}</h3><p>{s}</p></div>)}</div></Section>
    <Head title="Частые вопросы" text="Коротко об услугах." /><Section><Accordion items={allFaq.slice(0, 4)} /></Section><Cta /></>
}
function Work() {
  const cats = ['Все', 'Сайты', 'Приложения', 'Магазины', 'Брендинг']
  const [c, setC] = useState('Все')
  return <><Head title="Проекты" text="Избранные работы за последние годы." /><Section><Tabs items={cats} value={c} onChange={setC} />
    <WorkGrid list={allWorks.filter(w => c === 'Все' || w[0] === c)} /></Section><Counters /><Slider items={allReviews.slice(0, 3)} /><Cta /></>
}
function About() {
  const values = [['🧭','Ясность','Объясняем решения простым языком.'],['🔧','Качество','Проверяем каждую деталь.'],['🤝','Партнёрство','Работаем как часть вашей команды.'],['🚀','Скорость','Запускаем быстро, улучшаем постоянно.']]
  const history = [['2017','Основали студию вдвоём.'],['2020','Выросли до 15 человек.'],['2023','Запустили свою дизайн-систему.'],['2026','120+ проектов в 14 странах.']]
  return <><Head title="О нас" text="Небольшая команда, которая отвечает за результат." />
    <Split tag="Миссия" title="Делаем цифровые продукты понятными" text="Мы верим, что хороший интерфейс экономит людям время." points={['Работаем открыто','Отвечаем за метрики','Учимся на каждом проекте']} g={3} />
    <Counters /><Head title="Наши ценности" text="Принципы, по которым мы работаем." /><Section><Cards items={values} /></Section>
    <Head title="История" text="Как мы росли." /><Section><div className="tl">{history.map(([y, t]) => <div key={y}><h3>{y}</h3><p>{t}</p></div>)}</div></Section><Logos /><Cta /></>
}
function Team() {
  return <><Head title="Команда" text="Люди, которые делают ваш продукт." /><Section><div className="grid">{allTeam.map(([n, r], i) => (
    <div className="card hov" key={n}><div className="av" style={{ background: grads[i % 6] }}>{n[0]}</div><h3>{n}</h3><p>{r}</p></div>
  ))}</div></Section>
    <Split flip tag="Карьера" title="Присоединяйтесь к нам" text="Ищем дизайнеров и разработчиков в команду." points={['Удалённый формат','Гибкий график','Обучение за счёт студии']} g={4} /><Cta /></>
}
function Pricing() {
  const [mode, setMode] = useState('Разово')
  const k = mode === 'Разово' ? 1 : 0.85
  return <><Head title="Цены" text="Ориентиры. Точную смету делаем после брифа." /><Section>
    <Tabs items={['Разово', 'Годовой −15%']} value={mode} onChange={setMode} />
    <div className="grid">{plans.map(([n, p, f, pop]) => (
      <div className={'card hov' + (pop ? ' pop' : '')} key={n}>{pop && <span className="tag">Популярный</span>}<h3>{n}</h3><div className="price">от {Math.round(p * k)} тыс. ₽</div>
        <ul>{f.map(x => <li key={x}>{x}</li>)}</ul><a className={'btn' + (pop ? '' : ' g')} href="#contact">Выбрать</a></div>
    ))}</div></Section>
    <Head title="Сравнение тарифов" text="Что входит в каждый пакет." /><Table />
    <Head title="Вопросы об оплате" text="" /><Section><Accordion items={allFaq.slice(1, 4)} /></Section><Cta /></>
}
function Reviews() {
  return <><Head title="Отзывы" text="Что говорят клиенты." /><Slider items={allReviews} /><Section><div className="grid">{allReviews.map(([t, a]) => (
    <div className="card hov" key={a}><p className="quote">“{t}”</p><p>— {a}</p></div>
  ))}</div></Section><Counters /><Logos /><Cta /></>
}
function Blog() {
  const [q, setQ] = useState(''); const [c, setC] = useState('Все')
  const list = allPosts.filter(p => (c === 'Все' || p[0] === c) && p[1].toLowerCase().includes(q.toLowerCase()))
  return <><Head title="Блог" text="Заметки о дизайне, коде и бизнесе." /><Section>
    <input placeholder="Поиск по статьям…" value={q} onChange={e => setQ(e.target.value)} />
    <Tabs items={['Все', 'Дизайн', 'Код', 'Бизнес']} value={c} onChange={setC} />
    <div className="grid">{list.map(([cat, t, m], i) => (
      <div className="card hov" key={t}><div className="thumb" style={{ background: grads[(i + 2) % 6], height: 110 }} /><span className="tag">{cat} · {m}</span><h3>{t}</h3></div>
    ))}</div>{list.length === 0 && <p>Ничего не найдено.</p>}</Section><Newsletter /></>
}
function Faq() {
  return <><Head title="Вопросы и ответы" text="Что спрашивают чаще всего." /><Section><Accordion items={allFaq} /></Section><Newsletter /><Cta /></>
}
function Contact() {
  const info = [['📧','Почта','hello@nordlight.example'],['📞','Телефон','+7 000 000-00-00'],['🕙','Часы работы','Пн–Пт, 10:00–19:00'],['📍','Офис','Москва, ул. Северная, 12']]
  return <><Head title="Контакты" text="Ответим в течение рабочего дня." /><Section><div className="grid" style={{ alignItems: 'start' }}>
    <ContactForm /><div className="grid" style={{ gridTemplateColumns: '1fr' }}>{info.map(([i, t, v]) => <div className="card" key={t}><div className="ic">{i}</div><h3>{t}</h3><p>{v}</p></div>)}</div>
  </div></Section><Head title="Как нас найти" text="" /><Section><div className="vis map" style={{ background: grads[2] }}>Карта · Москва, ул. Северная, 12</div></Section>
    <Head title="Перед тем как написать" text="Возможно, ответ уже есть." /><Section><Accordion items={allFaq.slice(0, 3)} /></Section></>
}

/* ---------- ПРИЛОЖЕНИЕ ---------- */
const pages = { home: Home, services: Services, work: Work, about: About, team: Team, pricing: Pricing, reviews: Reviews, blog: Blog, faq: Faq, contact: Contact }
const read = () => { const h = location.hash.slice(1); return routes.some(r => r[0] === h) ? h : 'home' }

export default function App() {
  const [page, setPage] = useState(read)
  useEffect(() => {
    const f = () => { setPage(read()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', f)
    return () => window.removeEventListener('hashchange', f)
  }, [])
  const Page = pages[page]
  return <><Nav page={page} /><main><Page /></main><Footer /></>
}