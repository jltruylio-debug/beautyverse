
import './style.css';

type Article = {
  id: string;
  category: string;
  title: string;
  description: string;
  readingTime: string;
  content: string[];
};

const articles: Article[] = [
  {
    id: 'skincare',
    category: 'SKINCARE',
    title: 'O guia definitivo de cuidados com a pele',
    description: 'Aprenda a conhecer sua pele, construir uma rotina e escolher os cuidados adequados.',
    readingTime: '12 minutos',
    content: [
      'Conhecer seu tipo de pele é o primeiro passo para construir uma rotina eficiente. Os tipos mais comuns são normal, seca, oleosa e mista.',
      'Uma rotina básica pode começar com limpeza suave, hidratação e proteção solar. A escolha dos produtos deve considerar as características e necessidades individuais da pele.',
      'Pela manhã, priorize limpeza, hidratação e protetor solar de amplo espectro FPS 30 ou superior. À noite, faça a limpeza e aplique um hidratante adequado.',
      'Introduza novos produtos gradualmente. Evite combinar vários ativos potentes sem orientação profissional e interrompa o uso se houver irritação persistente.'
    ]
  },
  {
    id: 'hair',
    category: 'CABELOS',
    title: 'Cabelos saudáveis: cuidados e tratamentos',
    description: 'Entenda a estrutura dos fios, os hábitos de cuidado e como escolher tratamentos.',
    readingTime: '10 minutos',
    content: [
      'Os cuidados capilares começam pela observação do couro cabeludo, da textura dos fios e das necessidades individuais.',
      'Utilize shampoo adequado ao couro cabeludo e condicionador no comprimento e nas pontas. A frequência de lavagem depende da oleosidade e da rotina de cada pessoa.',
      'Máscaras podem complementar a rotina. Hidratação, nutrição e reconstrução possuem finalidades diferentes e devem ser escolhidas conforme a condição dos fios.',
      'Reduza o calor excessivo, utilize proteção térmica quando necessário e evite penteados que provoquem tração constante.'
    ]
  },
  {
    id: 'makeup',
    category: 'MAQUIAGEM',
    title: 'Maquiagem: técnicas para todos os dias',
    description: 'Conheça preparação da pele, acabamento, cores e técnicas de aplicação.',
    readingTime: '9 minutos',
    content: [
      'Uma maquiagem bonita começa com a preparação da pele. Limpeza, hidratação e proteção solar ajudam a criar uma base confortável.',
      'Escolha produtos considerando seu tom e subtom de pele, acabamento desejado e sensibilidade. Testar a cor em luz natural pode ajudar na escolha.',
      'Aplique os produtos em camadas leves e construa a cobertura gradualmente. Pincéis, esponjas e os próprios dedos podem oferecer acabamentos diferentes.',
      'Remova a maquiagem antes de dormir e higienize regularmente os acessórios utilizados.'
    ]
  },
  {
    id: 'body',
    category: 'AUTOCUIDADO',
    title: 'Autocuidado e beleza de dentro para fora',
    description: 'Hábitos, higiene, sono e cuidados corporais para uma rotina equilibrada.',
    readingTime: '8 minutos',
    content: [
      'Autocuidado não significa seguir padrões estéticos. Significa desenvolver hábitos que contribuam para o conforto, a saúde e o bem-estar.',
      'Uma rotina corporal pode incluir higiene adequada, hidratação da pele, proteção solar nas áreas expostas e atenção a mudanças na pele.',
      'Sono regular, alimentação variada, hidratação e atividade física contribuem para o bem-estar geral.',
      'Respeite suas necessidades e procure profissionais de saúde diante de alterações persistentes ou preocupantes.'
    ]
  },
  {
    id: 'nails',
    category: 'UNHAS',
    title: 'O universo dos cuidados com as unhas',
    description: 'Aprenda sobre higiene, manutenção, esmaltação e cuidados com as cutículas.',
    readingTime: '7 minutos',
    content: [
      'Mantenha unhas e ferramentas limpas. Não compartilhe alicates, cortadores ou instrumentos que possam causar lesões.',
      'Hidrate mãos e unhas regularmente. Evite retirar profundamente as cutículas, pois elas ajudam a proteger a região ao redor da unha.',
      'Dê intervalos entre procedimentos agressivos e observe alterações de cor, espessura ou formato.',
      'Mudanças persistentes, dor ou inflamação merecem avaliação de um dermatologista.'
    ]
  },
  {
    id: 'perfume',
    category: 'FRAGRÂNCIAS',
    title: 'Como descobrir sua fragrância ideal',
    description: 'Famílias olfativas, notas, fixação e dicas para escolher perfumes.',
    readingTime: '6 minutos',
    content: [
      'As fragrâncias podem ser agrupadas em famílias como florais, cítricas, amadeiradas, orientais e aromáticas.',
      'As notas de saída aparecem primeiro, as notas de coração formam a identidade central e as notas de fundo permanecem por mais tempo.',
      'Experimente uma fragrância na pele e espere sua evolução antes de decidir. O resultado pode variar de pessoa para pessoa.',
      'Armazene perfumes longe de calor, luz direta e umidade para preservar suas características.'
    ]
  }
];

const recommendations = [
  {
    category: 'SKINCARE',
    title: 'Kit básico de cuidados faciais',
    description: 'Um ponto de partida com limpeza suave, hidratação e proteção solar.',
    tag: 'ROTINA ESSENCIAL'
  },
  {
    category: 'CABELOS',
    title: 'Cuidados para fios ressecados',
    description: 'Procure produtos condicionantes adequados à textura e às necessidades dos seus fios.',
    tag: 'GUIA DE CUIDADOS'
  },
  {
    category: 'MAQUIAGEM',
    title: 'Kit de maquiagem essencial',
    description: 'Produtos versáteis para criar uma maquiagem leve e adaptar o acabamento.',
    tag: 'SELEÇÃO BEAUTY'
  }
];

const assistantAnswers: Array<{ keywords: string[]; answer: string }> = [
  {
    keywords: ['oleosa', 'oleosidade', 'brilho'],
    answer: 'Para uma pele com tendência à oleosidade, considere um limpador suave, hidratante leve e protetor solar adequado. Evite lavar excessivamente ou tentar ressecar a pele.'
  },
  {
    keywords: ['seca', 'ressecada', 'descamando'],
    answer: 'Peles secas podem se beneficiar de limpeza suave e hidratantes com ingredientes como glicerina e ceramidas. Se houver descamação persistente ou desconforto, procure um dermatologista.'
  },
  {
    keywords: ['cabelo', 'cabelos', 'fio', 'fios'],
    answer: 'Comece identificando as necessidades do couro cabeludo e dos fios. Shampoo adequado, condicionador e proteção térmica quando necessário são bons pontos de partida.'
  },
  {
    keywords: ['maquiagem', 'make', 'base'],
    answer: 'Uma boa preparação inclui limpeza, hidratação e proteção solar. Escolha a base considerando seu tom, subtom e acabamento preferido.'
  },
  {
    keywords: ['protetor', 'solar', 'fps'],
    answer: 'O protetor solar de amplo espectro FPS 30 ou superior é uma parte importante dos cuidados diários. Reaplique conforme as instruções do produto e a exposição.'
  },
  {
    keywords: ['unha', 'unhas'],
    answer: 'Mantenha as unhas limpas, evite compartilhar instrumentos e hidrate mãos e unhas. Dor, inflamação ou alterações persistentes precisam de avaliação profissional.'
  }
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('O elemento principal #app não foi encontrado.');
}

function escapeHTML(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };

    return entities[character] ?? character;
  });
}

function renderHeader(): string {
  return `
    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="BEAUTYVERSE - início">
        BEAUTY<span>VERSE</span>
        <small>THE ART OF BEAUTY</small>
      </a>

      <nav class="main-nav" aria-label="Navegação principal">
        <a href="#inicio">Início</a>
        <a href="#explorar">Guias</a>
        <a href="#recomendacoes">Recomendações</a>
        <a href="#assistente">Beauty AI</a>
      </nav>

      <a class="header-cta" href="#explorar">Explorar universo <span>↗</span></a>

      <button class="mobile-menu" id="mobile-menu" aria-label="Abrir menu" aria-expanded="false">
        <span></span><span></span>
      </button>
    </header>
  `;
}

function renderHero(): string {
  return `
    <section class="hero" id="inicio">
      <div class="hero-content">
        <span class="eyebrow"><span></span> SEU UNIVERSO DE BELEZA</span>

        <h1>A beleza começa<br>quando você <em>se conhece.</em></h1>

        <p>
          Conhecimento, inspiração e autocuidado em um só lugar.
          Descubra conteúdos cuidadosamente preparados para acompanhar
          sua jornada de beleza.
        </p>

        <div class="hero-actions">
          <a class="button button-dark" href="#explorar">Explorar os guias <span>↗</span></a>
          <a class="text-link" href="#assistente">Conhecer a Beauty AI <span>→</span></a>
        </div>

        <div class="hero-note">
          <span class="note-line"></span>
          <span>BEAUTY IS PERSONAL. YOUR JOURNEY TOO.</span>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-image" role="img" aria-label="Composição editorial de beleza e skincare">
          <div class="image-caption">
            <span>01 / BEAUTY EDITION</span>
            <span>DISCOVER YOURSELF</span>
          </div>
        </div>
        <div class="floating-note">
          <span class="floating-icon">✳</span>
          <span>Seu momento.<br><strong>Seu cuidado.</strong></span>
        </div>
      </div>

      <div class="hero-bottom">
        <span>BEAUTYVERSE JOURNAL</span>
        <span>SKIN · HAIR · MAKEUP · WELLNESS</span>
        <span>EST. 2026</span>
      </div>
    </section>
  `;
}

function renderIntroduction(): string {
  return `
    <section class="intro-section section-padding">
      <div class="section-kicker">01 — NOSSA FILOSOFIA</div>
      <div class="intro-grid">
        <h2>Mais do que beleza.<br><em>Conhecimento para cuidar.</em></h2>
        <div class="intro-copy">
          <p>
            Acreditamos que beleza não tem uma única definição.
            Ela está no cuidado, na descoberta e na liberdade de
            escolher o que faz sentido para você.
          </p>
          <p>
            O BEAUTYVERSE reúne informações, guias e recomendações
            para tornar sua rotina mais consciente e personalizada.
          </p>
          <a class="text-link" href="#explorar">Descubra nossos conteúdos →</a>
        </div>
      </div>
    </section>
  `;
}

function renderArticles(): string {
  return `
    <section class="guides-section section-padding" id="explorar">
      <div class="section-heading">
        <div>
          <div class="section-kicker">02 — BEAUTY KNOWLEDGE</div>
          <h2>Explore nosso <em>universo.</em></h2>
        </div>
        <p>Guias para aprender, experimentar<br>e construir sua própria rotina.</p>
      </div>

      <div class="search-area">
        <label class="search-box">
          <span aria-hidden="true">⌕</span>
          <input id="article-search" type="search" placeholder="O que você deseja descobrir?" aria-label="Pesquisar conteúdos">
          <span class="search-hint">PESQUISAR</span>
        </label>
      </div>

      <div class="article-grid" id="article-grid">
        ${articles.map((article, index) => `
          <article class="article-card">
            <div class="article-art article-art-${index + 1}">
              <span class="article-number">0${index + 1}</span>
              <span class="article-symbol">${['✳', '❋', '✧', '❀', '✳', '◇'][index]}</span>
              <span class="article-category">${escapeHTML(article.category)}</span>
            </div>
            <div class="article-info">
              <div class="article-meta">${escapeHTML(article.readingTime)} DE LEITURA</div>
              <h3>${escapeHTML(article.title)}</h3>
              <p>${escapeHTML(article.description)}</p>
              <button class="article-link" data-article="${article.id}">Ler guia completo <span>↗</span></button>
            </div>
          </article>
        `).join('')}
      </div>

      <p class="empty-search" id="empty-search" hidden>Nenhum conteúdo encontrado. Experimente outra palavra.</p>
    </section>
  `;
}

function renderRecommendations(): string {
  return `
    <section class="recommendations-section section-padding" id="recomendacoes">
      <div class="section-kicker">03 — CURATED FOR YOU</div>
      <div class="section-heading">
        <h2>Escolhas com <em>intenção.</em></h2>
        <p>Aprenda a escolher produtos considerando<br>suas necessidades e preferências.</p>
      </div>

      <div class="recommendation-grid">
        ${recommendations.map((item, index) => `
          <article class="recommendation-card recommendation-${index + 1}">
            <div class="recommendation-visual">
              <span>${['✧', '❋', '◇'][index]}</span>
            </div>
            <div class="recommendation-info">
              <span class="recommendation-tag">${escapeHTML(item.tag)}</span>
              <h3>${escapeHTML(item.title)}</h3>
              <p>${escapeHTML(item.description)}</p>
              <a href="#assistente" class="text-link">Descobrir mais →</a>
            </div>
          </article>
        `).join('')}
      </div>

      <p class="disclaimer">
        Recomendações educativas. A escolha de produtos deve considerar
        suas necessidades, sensibilidades e orientação profissional quando necessária.
      </p>
    </section>
  `;
}

function renderAssistant(): string {
  return `
    <section class="assistant-section section-padding" id="assistente">
      <div class="assistant-decoration">✳</div>
      <div class="section-kicker">04 — YOUR BEAUTY COMPANION</div>

      <div class="assistant-grid">
        <div class="assistant-copy">
          <span class="assistant-label">MEET YOUR BEAUTY ASSISTANT</span>
          <h2>Suas dúvidas.<br>Nossas <em>descobertas.</em></h2>
          <p>
            Conheça a Beauty AI, uma experiência de orientação
            sobre beleza, cuidados pessoais e nossos conteúdos.
          </p>
          <div class="assistant-benefit"><span>✳</span> Tire dúvidas sobre os guias</div>
          <div class="assistant-benefit"><span>✳</span> Descubra informações sobre cuidados</div>
          <div class="assistant-benefit"><span>✳</span> Encontre conteúdos relevantes</div>
          <small class="ai-notice">
            Esta versão inicial utiliza respostas educativas locais.
            A integração com inteligência artificial online será conectada
            por um serviço seguro de backend.
          </small>
        </div>

        <div class="chat-panel">
          <div class="chat-header">
            <div class="chat-avatar">✳</div>
            <div>
              <strong>BEAUTY AI</strong>
              <span>ASSISTENTE BEAUTYVERSE</span>
            </div>
            <span class="chat-status">● ONLINE</span>
          </div>

          <div class="chat-messages" id="chat-messages" aria-live="polite">
            <div class="chat-message assistant-message">
              Olá! Seja bem-vinda ao BEAUTYVERSE. ✨
              <br><br>
              Posso ajudar você a explorar nossos guias e compartilhar
              informações gerais sobre beleza. O que gostaria de descobrir?
            </div>
          </div>

          <form class="chat-form" id="chat-form">
            <input
              id="chat-input"
              type="text"
              maxlength="500"
              placeholder="Escreva sua dúvida..."
              autocomplete="off"
              aria-label="Sua mensagem"
              required
            >
            <button type="submit" aria-label="Enviar mensagem">↑</button>
          </form>
          <div class="chat-footnote">BEAUTY KNOWLEDGE, WITH CARE.</div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter(): string {
  return `
    <footer class="site-footer">
      <div class="footer-main">
        <a class="brand footer-brand" href="#inicio">
          BEAUTY<span>VERSE</span>
          <small>THE ART OF BEAUTY</small>
        </a>
        <p>Conhecimento, inspiração<br>e autocuidado em um só universo.</p>
        <a href="#inicio" class="back-top">VOLTAR AO TOPO ↑</a>
      </div>
      <div class="footer-bottom">
        <span>© 2026 BEAUTYVERSE. TODOS OS DIREITOS RESERVADOS.</span>
        <span>BEAUTY IS A JOURNEY.</span>
      </div>
    </footer>
  `;
}

function renderArticleModal(article: Article): void {
  const existing = document.querySelector('.article-modal');
  existing?.remove();

  const modal = document.createElement('div');
  modal.className = 'article-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', article.title);

  modal.innerHTML = `
    <div class="modal-backdrop" data-close-modal></div>
    <article class="modal-content">
      <button class="modal-close" data-close-modal aria-label="Fechar">×</button>
      <span class="section-kicker">${escapeHTML(article.category)} · ${escapeHTML(article.readingTime)}</span>
      <h2>${escapeHTML(article.title)}</h2>
      <p class="modal-description">${escapeHTML(article.description)}</p>
      <div class="modal-divider"></div>
      ${article.content.map((paragraph, index) => `
        <div class="modal-chapter">
          <span>0${index + 1}</span>
          <p>${escapeHTML(paragraph)}</p>
        </div>
      `).join('')}
      <div class="modal-disclaimer">
        Conteúdo educativo. As necessidades individuais podem variar.
        Procure orientação profissional para questões específicas de saúde.
      </div>
    </article>
  `;

  document.body.append(modal);
  document.body.classList.add('modal-open');

  modal.querySelectorAll('[data-close-modal]').forEach((element) => {
    element.addEventListener('click', closeArticleModal);
  });

  modal.querySelector<HTMLButtonElement>('.modal-close')?.focus();
}

function closeArticleModal(): void {
  document.querySelector('.article-modal')?.remove();
  document.body.classList.remove('modal-open');
}

function getAssistantAnswer(message: string): string {
  const normalized = message.toLocaleLowerCase('pt-BR');

  if (normalized.includes('olá') || normalized.includes('oi') || normalized.includes('bom dia')) {
    return 'Olá! Que bom ter você aqui! ✨ Você pode me perguntar sobre skincare, cabelos, maquiagem, unhas ou autocuidado.';
  }

  const match = assistantAnswers.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );

  if (match) {
    return match.answer;
  }

  return 'Posso ajudar com informações gerais sobre skincare, cabelos, maquiagem, proteção solar, unhas e autocuidado. Experimente perguntar sobre um desses assuntos! Para questões médicas ou problemas persistentes, procure um profissional qualificado.';
}

function addChatMessage(message: string, sender: 'user' | 'assistant'): void {
  const messages = document.querySelector<HTMLDivElement>('#chat-messages');

  if (!messages) return;

  const element = document.createElement('div');
  element.className = sender === 'user'
    ? 'chat-message user-message'
    : 'chat-message assistant-message';

  element.textContent = message;
  messages.append(element);
  messages.scrollTop = messages.scrollHeight;
}

function setupSearch(): void {
  const search = document.querySelector<HTMLInputElement>('#article-search');
  const grid = document.querySelector<HTMLDivElement>('#article-grid');
  const empty = document.querySelector<HTMLParagraphElement>('#empty-search');

  if (!search || !grid || !empty) return;

  search.addEventListener('input', () => {
    const term = search.value.toLocaleLowerCase('pt-BR').trim();
    let visibleCount = 0;

    grid.querySelectorAll<HTMLElement>('.article-card').forEach((card, index) => {
      const article = articles[index];

      if (!article) return;

      const searchable = [
        article.category,
        article.title,
        article.description,
        ...article.content
      ].join(' ').toLocaleLowerCase('pt-BR');

      const matches = searchable.includes(term);
      card.hidden = !matches;

      if (matches) visibleCount++;
    });

    empty.hidden = visibleCount !== 0;
  });
}

function setupChat(): void {
  const form = document.querySelector<HTMLFormElement>('#chat-form');
  const input = document.querySelector<HTMLInputElement>('#chat-input');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = input?.value.trim();

    if (!message) return;

    addChatMessage(message, 'user');

    if (input) {
      input.value = '';
    }

    window.setTimeout(() => {
      addChatMessage(getAssistantAnswer(message), 'assistant');
    }, 350);
  });
}

function setupNavigation(): void {
  const menuButton = document.querySelector<HTMLButtonElement>('#mobile-menu');
  const navigation = document.querySelector<HTMLElement>('.main-nav');

  menuButton?.addEventListener('click', () => {
    const isOpen = navigation?.classList.toggle('nav-open') ?? false;

    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigation?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('nav-open');
      menuButton?.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupArticles(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-article]').forEach((button) => {
    button.addEventListener('click', () => {
      const article = articles.find((item) => item.id === button.dataset.article);

      if (article) {
        renderArticleModal(article);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeArticleModal();
    }
  });
}

function initializeApplication(): void {
  app.innerHTML = `
    ${renderHeader()}
    <main>
      ${renderHero()}
      ${renderIntroduction()}
      ${renderArticles()}
      ${renderRecommendations()}
      ${renderAssistant()}
    </main>
    ${renderFooter()}
  `;

  setupSearch();
  setupChat();
  setupNavigation();
  setupArticles();
}

initializeApplication();
