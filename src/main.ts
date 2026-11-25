
import './style.css';
import { articles } from './content';

type Article = typeof articles[number];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Elemento principal #app não encontrado.');
}

const recommendations = [
  {
    category: 'SKINCARE',
    title: 'Kit básico de cuidados faciais',
    description: 'Um ponto de partida com limpeza suave, hidratação e proteção solar.',
    tag: 'ROTINA ESSENCIAL',
    symbol: '✧'
  },
  {
    category: 'CABELOS',
    title: 'Cuidados para fios ressecados',
    description: 'Conheça produtos condicionantes e hábitos adequados aos seus fios.',
    tag: 'GUIA DE CUIDADOS',
    symbol: '❋'
  },
  {
    category: 'MAQUIAGEM',
    title: 'Kit de maquiagem essencial',
    description: 'Produtos versáteis para criar uma maquiagem leve e elegante.',
    tag: 'SELEÇÃO BEAUTY',
    symbol: '◇'
  }
];

const assistantAnswers = [
  {
    keywords: ['oleosa', 'oleosidade', 'brilho'],
    answer: 'Para uma pele com tendência à oleosidade, considere um limpador suave, hidratante leve e protetor solar adequado. Evite lavar excessivamente ou tentar ressecar a pele.'
  },
  {
    keywords: ['seca', 'ressecada', 'descamando'],
    answer: 'Peles secas podem se beneficiar de limpeza suave e hidratantes com ingredientes como glicerina e ceramidas. Se houver descamação persistente, procure um dermatologista.'
  },
  {
    keywords: ['cabelo', 'cabelos', 'fio', 'fios'],
    answer: 'Comece identificando as necessidades do couro cabeludo e dos fios. Shampoo adequado, condicionador e proteção térmica são bons pontos de partida.'
  },
  {
    keywords: ['maquiagem', 'make', 'base'],
    answer: 'Uma boa preparação inclui limpeza, hidratação e proteção solar. Escolha a base considerando seu tom, subtom e acabamento preferido.'
  },
  {
    keywords: ['protetor', 'solar', 'fps'],
    answer: 'O protetor solar de amplo espectro FPS 30 ou superior é uma parte importante dos cuidados diários. Reaplique conforme as instruções do produto.'
  },
  {
    keywords: ['unha', 'unhas'],
    answer: 'Mantenha as unhas limpas, evite compartilhar instrumentos e hidrate mãos e unhas. Dor, inflamação ou alterações persistentes precisam de avaliação profissional.'
  },
  {
    keywords: ['perfume', 'fragrância', 'fragrancia'],
    answer: 'Experimente diferentes famílias olfativas, como florais, cítricas e amadeiradas. Teste na pele e espere a fragrância evoluir antes de escolher.'
  }
];

function escapeHTML(value: string): string {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[character] ?? character);
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

      <a class="header-cta" href="#explorar">
        Explorar universo <span>↗</span>
      </a>

      <button class="mobile-menu" id="mobile-menu"
        aria-label="Abrir menu" aria-expanded="false">
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
          <a class="button button-dark" href="#explorar">
            Explorar os guias <span>↗</span>
          </a>
          <a class="text-link" href="#assistente">
            Conhecer a Beauty AI <span>→</span>
          </a>
        </div>

        <div class="hero-note">
          <span class="note-line"></span>
          <span>BEAUTY IS PERSONAL. YOUR JOURNEY TOO.</span>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-image" role="img"
          aria-label="Composição editorial de beleza e skincare">
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
          <a class="text-link" href="#explorar">
            Descubra nossos conteúdos →
          </a>
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
        <p>Guias para aprender, experimentar<br>
          e construir sua própria rotina.</p>
      </div>

      <div class="search-area">
        <label class="search-box">
          <span aria-hidden="true">⌕</span>
          <input id="article-search" type="search"
            placeholder="O que você deseja descobrir?"
            aria-label="Pesquisar conteúdos">
          <span class="search-hint">PESQUISAR</span>
        </label>
      </div>

      <div class="article-grid" id="article-grid">
        ${articles.map((article, index) => `
          <article class="article-card">
            <div class="article-art article-art-${(index % 6) + 1}">
              <span class="article-number">
                ${String(index + 1).padStart(2, '0')}
              </span>
              <span class="article-symbol">
                ${['✳', '❋', '✧', '❀', '✳', '◇'][index % 6]}
              </span>
              <span class="article-category">
                ${escapeHTML(article.category)}
              </span>
            </div>

            <div class="article-info">
              <div class="article-meta">
                ${escapeHTML(article.readingTime)} DE LEITURA
              </div>
              <h3>${escapeHTML(article.title)}</h3>
              <p>${escapeHTML(article.description)}</p>
              <button class="article-link"
                data-article="${escapeHTML(article.id)}">
                Ler guia completo <span>↗</span>
              </button>
            </div>
          </article>
        `).join('')}
      </div>

      <p class="empty-search" id="empty-search" hidden>
        Nenhum conteúdo encontrado. Experimente outra palavra.
      </p>
    </section>
  `;
}

function renderRecommendations(): string {
  return `
    <section class="recommendations-section section-padding"
      id="recomendacoes">
      <div class="section-kicker">03 — CURATED FOR YOU</div>

      <div class="section-heading">
        <h2>Escolhas com <em>intenção.</em></h2>
        <p>Aprenda a escolher produtos considerando<br>
          suas necessidades e preferências.</p>
      </div>

      <div class="recommendation-grid">
        ${recommendations.map((item, index) => `
          <article class="recommendation-card recommendation-${index + 1}">
            <div class="recommendation-visual">
              <span>${item.symbol}</span>
            </div>
            <div class="recommendation-info">
              <span class="recommendation-tag">
                ${escapeHTML(item.tag)}
              </span>
              <h3>${escapeHTML(item.title)}</h3>
              <p>${escapeHTML(item.description)}</p>
              <a href="#assistente" class="text-link">
                Descobrir mais →
              </a>
            </div>
          </article>
        `).join('')}
      </div>

      <p class="disclaimer">
        Recomendações educativas. A escolha de produtos deve considerar
        suas necessidades, sensibilidades e orientação profissional.
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
          <div class="assistant-benefit">
            <span>✳</span> Tire dúvidas sobre os guias
          </div>
          <div class="assistant-benefit">
            <span>✳</span> Descubra informações sobre cuidados
          </div>
          <div class="assistant-benefit">
            <span>✳</span> Encontre conteúdos relevantes
          </div>
          <small class="ai-notice">
            Esta versão utiliza respostas educativas locais.
            A integração com inteligência artificial online será
            conectada por um serviço seguro de backend.
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

          <div class="chat-messages" id="chat-messages"
            aria-live="polite">
            <div class="chat-message assistant-message">
              Olá! Seja bem-vinda ao BEAUTYVERSE. ✨
              <br><br>
              Posso ajudar você a explorar nossos guias e compartilhar
              informações gerais sobre beleza. O que gostaria de descobrir?
            </div>
          </div>

          <form class="chat-form" id="chat-form">
            <input id="chat-input" type="text" maxlength="500"
              placeholder="Escreva sua dúvida..."
              autocomplete="off" aria-label="Sua mensagem" required>
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
        <p>Conhecimento, inspiração<br>
          e autocuidado em um só universo.</p>
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
  closeArticleModal();

  const modal = document.createElement('div');
  modal.className = 'article-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', article.title);

  modal.innerHTML = `
    <div class="modal-backdrop" data-close-modal></div>
    <article class="modal-content">
      <button class="modal-close" data-close-modal
        aria-label="Fechar">×</button>

      <span class="section-kicker">
        ${escapeHTML(article.category)} ·
        ${escapeHTML(article.readingTime)}
      </span>

      <h2>${escapeHTML(article.title)}</h2>
      <p class="modal-description">
        ${escapeHTML(article.description)}
      </p>
      <div class="modal-divider"></div>

      ${article.content.map((paragraph, index) => `
        <div class="modal-chapter">
          <span>${String(index + 1).padStart(2, '0')}</span>
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

  modal.querySelectorAll('[data-close-modal]').forEach(element => {
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

  if (
    normalized.includes('olá') ||
    normalized.includes('oi') ||
    normalized.includes('bom dia')
  ) {
    return 'Olá! Que bom ter você aqui! ✨ Pergunte sobre skincare, cabelos, maquiagem, unhas, perfumes ou autocuidado.';
  }

  const match = assistantAnswers.find(item =>
    item.keywords.some(keyword => normalized.includes(keyword))
  );

  if (match) return match.answer;

  const articleMatch = articles.find(article => {
    const searchable = [
      article.title,
      article.category,
      article.description,
      ...article.content
    ].join(' ').toLocaleLowerCase('pt-BR');

    return searchable.includes(normalized);
  });

  if (articleMatch) {
    return `Encontrei um conteúdo que pode ajudar: "${articleMatch.title}". Acesse a seção de guias para ler o material completo.`;
  }

  return 'Posso ajudar com informações gerais sobre skincare, cabelos, maquiagem, proteção solar, unhas, perfumes e autocuidado. Experimente perguntar sobre um desses assuntos! Para questões médicas, procure um profissional qualificado.';
}

function addChatMessage(
  message: string,
  sender: 'user' | 'assistant'
): void {
  const messages = document.querySelector<HTMLDivElement>(
    '#chat-messages'
  );

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
  const search = document.querySelector<HTMLInputElement>(
    '#article-search'
  );
  const grid = document.querySelector<HTMLDivElement>(
    '#article-grid'
  );
  const empty = document.querySelector<HTMLParagraphElement>(
    '#empty-search'
  );

  if (!search || !grid || !empty) return;

  search.addEventListener('input', () => {
    const term = search.value.toLocaleLowerCase('pt-BR').trim();
    let visibleCount = 0;

    grid.querySelectorAll<HTMLElement>('.article-card')
      .forEach((card, index) => {
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

  form?.addEventListener('submit', event => {
    event.preventDefault();

    const message = input?.value.trim();
    if (!message) return;

    addChatMessage(message, 'user');

    if (input) input.value = '';

    window.setTimeout(() => {
      addChatMessage(getAssistantAnswer(message), 'assistant');
    }, 350);
  });
}

function setupNavigation(): void {
  const menuButton = document.querySelector<HTMLButtonElement>(
    '#mobile-menu'
  );
  const navigation = document.querySelector<HTMLElement>('.main-nav');

  menuButton?.addEventListener('click', () => {
    const isOpen = navigation?.classList.toggle('nav-open') ?? false;
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigation?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navigation.classList.remove('nav-open');
      menuButton?.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupArticles(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-article]')
    .forEach(button => {
      button.addEventListener('click', () => {
        const article = articles.find(
          item => item.id === button.dataset.article
        );

        if (article) renderArticleModal(article);
      });
    });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeArticleModal();
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
