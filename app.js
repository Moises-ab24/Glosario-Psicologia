const terms = [
    {
        term: "Ansiedad", letter: "A",
        definition: "Es cuando el cuerpo y la mente reaccionan ante algo que se percibe como amenaza, aunque muchas veces ese \"peligro\" no sea real. Se siente como nerviosismo constante, tensión muscular, dificultad para dormir. No es lo mismo que el miedo, porque el miedo tiene un objeto claro; la ansiedad no siempre.",
        example: "Una persona que siente el corazón acelerado antes de un examen, aunque haya estudiado bien.",
        source: "American Psychological Association. (2023). <em>Anxiety.</em> https://www.apa.org/topics/anxiety/index",
        img: "images/ansiedad.jpg"
    },
    {
        term: "Behaviorismo", letter: "B",
        definition: "Corriente de la psicología que dice que lo único que vale estudiar es la conducta observable, no los pensamientos ni emociones que no se pueden medir. Watson y Skinner fueron los más conocidos de este enfoque.",
        example: "Enseñarle a un perro a sentarse usando premios es un método conductista.",
        source: "Gondra, J. M. (1998). <em>La psicología moderna.</em> Biblioteca Nueva.",
        img: "images/behaviorismo.jpg"
    },
    {
        term: "Catarsis", letter: "C",
        definition: "Es ese alivio emocional que se siente después de soltar algo que se tenía guardado, ya sea llorando, hablando, gritando, o incluso viendo una película triste. Viene del griego y fue Freud quien lo adoptó en psicoterapia.",
        example: "Llorar mucho con una película y terminar sintiéndose más ligero.",
        source: "Freud, S. (1895/1978). <em>Estudios sobre la histeria.</em> Amorrortu Editores.",
        img: "images/catarsis.jpg"
    },
    {
        term: "Depresión", letter: "D",
        definition: "Es un trastorno del estado de ánimo donde la persona pierde interés en cosas que antes le gustaban, se siente sin energía, y eso dura semanas o meses. Tiene causas biológicas, psicológicas y sociales.",
        example: "Alguien que dejó de salir con amigos, no come bien y siente que nada tiene sentido.",
        source: "Organización Mundial de la Salud. (2023). <em>Depresión.</em> https://www.who.int/es/news-room/fact-sheets/detail/depression",
        img: "images/depresion.jpg"
    },
    {
        term: "Emoción", letter: "E",
        definition: "Es una respuesta rápida del cuerpo y la mente ante una situación. Cambia la forma en que pensamos, el ritmo cardíaco, la postura, la expresión facial. Las básicas según Ekman son: alegría, tristeza, miedo, ira, sorpresa y asco.",
        example: "El corazón se acelera cuando uno se asusta de repente.",
        source: "Ekman, P. (1992). An argument for basic emotions. <em>Cognition and Emotion, 6</em>(3–4), 169–200. https://doi.org/10.1080/02699939208411068",
        img: "images/emocion.jpg"
    },
    {
        term: "Frustración", letter: "F",
        definition: "Ocurre cuando algo bloquea el camino hacia una meta. No es solo enojo, es esa sensación de impotencia cuando uno intenta algo y no puede lograrlo. Puede llevar a agresión, resignación o a buscar otra solución.",
        example: "Estudiar mucho para un examen y reprobarlo igual.",
        source: "Dollard, J., Doob, L., Miller, N., Mowrer, O., & Sears, R. (1939). <em>Frustration and aggression.</em> Yale University Press.",
        img: "images/frustacion.jpg"
    },
    {
        term: "Gestalt", letter: "G",
        definition: "Es una corriente que dice que el todo es más que la suma de sus partes. En psicología, significa que la mente organiza lo que percibe de forma natural para darle sentido, aunque la información esté incompleta.",
        example: "Ver una figura completa aunque solo haya puntos o líneas sueltas.",
        source: "Köhler, W. (1947/1972). <em>Psicología de la forma.</em> Biblioteca Nueva.",
        img: "images/gestalt.jpg"
    },
    {
        term: "Humanismo", letter: "H",
        definition: "Corriente psicológica que pone al ser humano en el centro, creyendo que las personas tienen capacidad natural de crecer y mejorar. Maslow y Rogers son sus referentes más conocidos. Se opone al conductismo porque no reduce al humano a puros estímulos y respuestas.",
        example: "Una terapia donde el psicólogo escucha sin juzgar para que la persona encuentre sus propias respuestas.",
        source: "Maslow, A. H. (1954/1991). <em>Motivación y personalidad.</em> Díaz de Santos.",
        img: "images/humanismo.jpg"
    },
    {
        term: "Inconsciente", letter: "I",
        definition: "Es esa parte de la mente que no se puede ver directamente, donde viven recuerdos, deseos y conflictos que la persona no sabe que tiene. Influye en el comportamiento aunque uno no se dé cuenta.",
        example: "Tener siempre reacciones exageradas con cierta persona sin entender bien por qué.",
        source: "Freud, S. (1915/1979). <em>Lo inconsciente.</em> Amorrortu Editores.",
        img: "images/inconsciente.jpg"
    },
    {
        term: "Juicio Moral", letter: "J",
        definition: "Es el proceso mental de decidir si algo está bien o mal. Kohlberg estudió cómo esto cambia con la edad, desde obedecer por miedo al castigo hasta actuar por principios propios.",
        example: "Un niño que no roba porque lo regañan vs. un adulto que no roba porque cree que está mal.",
        source: "Papalia, D. E., Wendkos, S., & Duskin, R. (2009). <em>Psicología del desarrollo</em> (11.ª ed.). McGraw-Hill.",
        img: "images/juicio-moral.jpg"
    },
    {
        term: "Kinestesia", letter: "K",
        definition: "Es el sentido interno que nos dice dónde están nuestros músculos y articulaciones sin necesidad de verlos. Gracias a esto uno puede caminar sin mirar los pies o escribir sin ver el teclado.",
        example: "Tocar la nariz con los ojos cerrados.",
        source: "Kandel, E. R., Schwartz, J. H., & Jessell, T. M. (2001). <em>Principios de neurociencia</em> (4.ª ed.). McGraw-Hill Interamericana.",
        img: "images/kinestesia.jpg"
    },
    {
        term: "Lenguaje Interior", letter: "L",
        definition: "Concepto de Vygotsky. Es esa voz interna con la que uno piensa, se da instrucciones o se habla a sí mismo. En niños pequeños primero es en voz alta y luego se va internalizando.",
        example: "Repetirse mentalmente los pasos de un procedimiento antes de hacerlo.",
        source: "Vygotsky, L. S. (1934/1995). <em>Pensamiento y lenguaje.</em> Paidós.",
        img: "images/lenguaje-interior.jpg"
    },
    {
        term: "Memoria", letter: "M",
        definition: "Es la capacidad de guardar, organizar y volver a traer información. No es como una grabación exacta; la memoria reconstruye, y por eso a veces recuerda cosas de forma diferente a como pasaron. Hay varios tipos: a corto plazo, largo plazo, episódica, semántica.",
        example: "Acordarse de lo que uno desayunó ayer vs. saber que el agua hierve a 100°C.",
        source: "Tulving, E. (1985). How many memory systems are there? <em>American Psychologist, 40</em>(4), 385–398. https://doi.org/10.1037/0003-066X.40.4.385",
        img: "images/memoria.jpg"
    },
    {
        term: "Neurosis", letter: "N",
        definition: "Cuando una persona sufre por conflictos internos no resueltos, pero sin perder el contacto con la realidad. Hoy no se usa tanto en diagnósticos, pero sigue siendo parte del vocabulario clínico.",
        example: "Alguien con un miedo excesivo a los gérmenes que le impide llevar una vida normal.",
        source: "Freud, S. (1926/1992). <em>Inhibición, síntoma y angustia.</em> Amorrortu Editores.",
        img: "images/neurosis.jpg"
    },
    {
        term: "Observación", letter: "O",
        definition: "En psicología, es un método de investigación donde se registra el comportamiento tal como ocurre, sin interferir. Puede ser en el ambiente natural de la persona o en un laboratorio controlado.",
        example: "Un psicólogo que anota cómo juegan los niños en el recreo sin participar.",
        source: "Hernández Sampieri, R., Fernández Collado, C., & Baptista Lucio, P. (2014). <em>Metodología de la investigación</em> (6.ª ed.). McGraw-Hill.",
        img: "images/observación.jpg"
    },
    {
        term: "Psicosis", letter: "P",
        definition: "Es cuando la persona pierde, parcialmente, el contacto con la realidad. Puede incluir alucinaciones (oír o ver cosas que no existen) o delirios (creer cosas que no son ciertas). Es más grave que la neurosis porque afecta la percepción del mundo.",
        example: "Una persona que cree firmemente que la persiguen cuando eso no ocurre.",
        source: "Organización Mundial de la Salud. (2019). <em>CIE-11: Clasificación Internacional de Enfermedades</em> (11.ª rev.). https://icd.who.int/es",
        img: "images/psicosis.jpg"
    },
    {
        term: "Refuerzo", letter: "R",
        definition: "Es cualquier consecuencia que hace que una conducta se repita. El refuerzo positivo agrega algo agradable; el negativo elimina algo desagradable. Ambos aumentan la probabilidad de que la conducta vuelva a ocurrir.",
        example: "Darle puntos extra a un estudiante cuando participa en clase (refuerzo positivo).",
        source: "Skinner, B. F. (1938). <em>The behavior of organisms.</em> Appleton-Century-Crofts.",
        img: "images/refuerzo.jpg"
    },
    {
        term: "Temperamento", letter: "T",
        definition: "Es la base biológica de la personalidad. Se nace con cierta tendencia a reaccionar de determinada forma: algunos bebés son más activos, otros más tranquilos. No cambia tanto con el tiempo como la personalidad.",
        example: "Un niño que siempre fue tímido desde pequeño, incluso antes de tener experiencias sociales difíciles.",
        source: "Chess, S., & Thomas, A. (1996). <em>Temperament: Theory and practice.</em> Brunner/Mazel.",
        img: "images/temperamento.jpg"
    },
    {
        term: "Umbral de Percepción", letter: "U",
        definition: "Es el nivel mínimo de estimulación que una persona puede detectar. Por debajo de ese punto, el cerebro no registra el estímulo. Varía entre personas y depende del contexto.",
        example: "No escuchar un sonido muy bajo en un lugar ruidoso, pero sí escucharlo en completo silencio.",
        source: "Myers, D. G. (2011). <em>Psicología</em> (9.ª ed.). Editorial Médica Panamericana.",
        img: "images/umbral-percepcion.jpg"
    },
    {
        term: "Zona de Desarrollo Próximo", letter: "Z",
        definition: "Concepto de Vygotsky. Es la diferencia entre lo que una persona puede hacer sola y lo que puede hacer con ayuda de alguien más capaz. Es donde ocurre el aprendizaje real, según él.",
        example: "Un estudiante que no puede resolver un problema de matemáticas solo pero sí lo logra con el orientador paso a paso.",
        source: "Vygotsky, L. S. (1978/1988). <em>El desarrollo de los procesos psicológicos superiores.</em> Grijalbo.",
        img: "images/zona-desarrollo-proximo.jpg"
    }
];

let page = -1;
let busy = false;

const leftEl = document.getElementById('pageLeft');
const leftIn = document.getElementById('leftInner');
const rightEl = document.getElementById('pageRight');
const rightIn = document.getElementById('rightInner');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const indEl = document.getElementById('indicator');

function isMobile() { return window.innerWidth <= 600; }

function imgHtml(t, extraClass) {
    const cls = extraClass || 'img-box';
    if (t.img) return `<div class="${cls}"><img src="${t.img}" alt="${t.term}"></div>`;
    return `<div class="${cls}"><div class="img-icon">🖼</div><div class="img-label">imagen aquí</div></div>`;
}

function renderLeft(p) {
    if (p === -1) {
        leftIn.innerHTML = `<div style="font-family:'Playfair Display',serif;font-size:13px;color:rgba(61,47,26,0.12);writing-mode:vertical-rl;letter-spacing:5px;text-transform:uppercase;">Psicología</div>`;
    } else if (p >= 0 && p < 20) {
        const t = terms[p];
        leftIn.innerHTML = `
      <span class="left-num">${String(p + 1).padStart(2, '0')}</span>
      <div class="left-term">${t.term}</div>
      <div class="left-rule"></div>
      ${imgHtml(t)}`;
    } else {
        leftIn.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:520px;"><span style="font-family:'IM Fell English',serif;font-size:10px;letter-spacing:4px;color:rgba(61,47,26,0.15);text-transform:uppercase;">Fin</span></div>`;
    }
}

function renderRight(p) {
    // En móvil incluimos la imagen dentro de la página derecha
    const mobile = isMobile();

    if (p === -1) {
        rightIn.innerHTML = `
      <div class="cover">
        <div class="cover-ornament">❧ ❧ ❧</div>
        <div class="cover-tag">Psicología</div>
        <div class="cover-title">Glosario<br>Psicológico</div>
        <div class="cover-sub">20 términos esenciales</div>
        <div class="cover-line"></div>
        <div class="cover-info">Moisés Abarca A.<br>Deyker Lanza V.<br>Sebastián Chacón V.<br>Donovan Paniagua N.<br>Sebastián Espinoza G.<br>12-2</div>
        <div class="cover-year">✦ 2026 ✦</div>
      </div>`;
    } else if (p >= 0 && p < 20) {
        const t = terms[p];
        const mobileImg = mobile ? imgHtml(t, 'img-box mobile-img-area') : '';
        rightIn.innerHTML = `
      ${mobileImg}
      <div class="term-header">
        <div class="term-big-letter">${t.letter}</div>
        <div class="term-title">${t.term}</div>
      </div>
      <div class="term-rule"></div>
      <div class="term-def">${t.definition}</div>
      <div class="term-ex">
        <div class="term-ex-label">Ejemplo</div>
        <div class="term-ex-text">${t.example}</div>
      </div>
      <div class="term-source"><b>Fuente</b><br>${t.source}</div>
      <div class="page-num">${(p + 1) * 2 + 1}</div>`;
    } else {
        const refs = terms.map((t, i) => `<div class="ref-item">${i + 1}. ${t.source}</div>`).join('');
        rightIn.innerHTML = `
      <div class="refs-title">Referencias</div>
      <div class="refs-rule"></div>
      <div class="refs-scroll">${refs}</div>`;
    }
}

function updateControls(p) {
    if (p === -1) indEl.textContent = 'Portada';
    else if (p < 20) indEl.textContent = `${p + 1} / 20`;
    else indEl.textContent = 'Referencias';
    btnPrev.disabled = (p === -1);
    btnNext.disabled = (p === 20);
}

function navigate(dir) {
    if (busy) return;
    const next = page + dir;
    if (next < -1 || next > 20) return;
    busy = true;

    leftEl.classList.add(dir > 0 ? 'slide-out-left' : 'slide-out-right');
    rightEl.classList.add(dir > 0 ? 'slide-out-right' : 'slide-out-left');

    setTimeout(() => {
        leftEl.classList.remove('slide-out-left', 'slide-out-right');
        rightEl.classList.remove('slide-out-left', 'slide-out-right');

        leftEl.style.transition = 'none';
        rightEl.style.transition = 'none';

        page = next;
        renderLeft(page);
        renderRight(page);
        updateControls(page);

        const fromL = dir > 0 ? 'slide-out-right' : 'slide-out-left';
        const fromR = dir > 0 ? 'slide-out-left' : 'slide-out-right';
        leftEl.classList.add(fromL);
        rightEl.classList.add(fromR);

        void leftEl.offsetWidth;

        leftEl.style.transition = '';
        rightEl.style.transition = '';
        leftEl.classList.remove(fromL);
        rightEl.classList.remove(fromR);

        setTimeout(() => { busy = false; }, 280);
    }, 260);
}

// Re-render al rotar pantalla
window.addEventListener('resize', () => {
    renderLeft(page);
    renderRight(page);
});

// Init
renderLeft(-1);
renderRight(-1);
updateControls(-1);

btnNext.addEventListener('click', () => navigate(1));
btnPrev.addEventListener('click', () => navigate(-1));
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'ArrowLeft') navigate(-1);
});

// Swipe táctil
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
}, { passive: true });

function navigateHome() {
    if (busy || page === -1) return;
    page = -1;
    renderLeft(-1);
    renderRight(-1);
    updateControls(-1);
}