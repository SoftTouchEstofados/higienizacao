// script.js

// Exemplo de JavaScript para rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dados dos serviços (baseados no seu PDF e catálogo.html)
const serviceData = {
    "renovacao-premium": {
        title: "Renovação Premium",
        description: "O luxo de ter seu estofado como novo. Utilizamos no sistema de higienização produtos reconhecidos por sua eficiência profissional, com ação bactericida e proteção residual contra novas sujeiras. Ideal para quem busca renovação profunda com preservação do tecido, sem excesso de química agressiva.",
        benefits: [
            "Remoção da sujidade",
            "Eliminação de 99,9% das bactérias",
            "Ação prolongada contra recontaminação por até 6 meses",
            "Realce imediato de cor e textura",
            "Toque suave e aparência de novo"
        ],
        price: "R$ 399,00",
        promoPrice: "R$ 251,37",
        image: "Renovacao%20Premium.jpg" // Ajuste o caminho da imagem
    },
    "diamante-especializada": {
        title: "Diamante Especializada",
        description: "Tecnologia e personalização no nível máximo. Nossa equipe realiza diagnóstico detalhado da sujeira e aplica uma combinação personalizada de produtos de alta performance. Preserva o tecido com mínima agressão mecânica, ideal para peças de alto valor ou delicadas.",
        benefits: [
            "Tratamento químico sob medida para remoção da sujeira com mais eficiência",
            "Proteção contra desgaste precoce, diminuindo a esfregação",
            "Remoção de manchas complexas, que não saem com qualquer produto",
            "Preservação da originalidade do estofado",
            "Eliminação de 99,9% das bactérias",
            "Ação prolongada contra recontaminação por até 6 meses",
            "Realce imediato de cor e textura",
            "Toque suave e aparência de novo"
        ],
        price: "R$ 499,00",
        promoPrice: "R$ 314,37",
        image: "Diamante%20Especializada.jpg" // Ajuste o caminho da imagem
    },
    "renovacao-sensitive": {
        title: "Renovação Sensitive",
        description: "Delicadeza e proteção para fibras nobres. Versão adaptada da Renovação Premium, utilizando produtos específicos para tecidos naturais (linho, algodão, lã), preservando cor, textura e estrutura, evitando manchas químicas.",
        benefits: [
            "Preservação de cor, textura e estrutura de tecidos naturais",
            "Evita manchas químicas",
            "Higienização profunda e delicada",
            "Ideal para tecidos nobres",
            "Eliminação de 99,9% das bactérias",
            "Ação prolongada contra recontaminação por até 6 meses",
            "Realce imediato de cor e textura",
            "Toque suave e aparência de novo"
        ],
        price: "R$ 429,00",
        promoPrice: "R$ 270,27",
        image: "Renovacao%20Sensitive.jpg" // Ajuste o caminho da imagem
    },
    "diamante-sensitive": {
        title: "Diamante Sensitive",
        description: "Diagnóstico e cuidado sob medida para peças raras e exclusivas. Processo detalhado, utilizando linha de produtos específicos, garantindo segurança para fibras naturais sem comprometer a eficiência da limpeza. Versão adaptada da Higienização Diamante, utilizando produtos específicos para tecidos naturais (linho, algodão, lã), preservando cor, textura e estrutura, evitando manchas químicas.",
        benefits: [
            "Cuidado especializado para tecidos nobres e raros",
            "Produtos específicos para fibras naturais",
            "Segurança e eficiência na limpeza",
            "Tratamento químico sob medida para remoção da sujeira com mais eficiência",
            "Proteção contra desgaste precoce, diminuindo a esfregação",
            "Remoção de manchas complexas, que não saem com qualquer produto",
            "Preservação da originalidade do estofado",
            "Eliminação de 99,9% das bactérias",
            "Ação prolongada contra recontaminação por até 6 meses",
            "Realce imediato de cor e textura",
            "Toque suave e aparência de novo"
        ],
        price: "R$ 499,00",
        promoPrice: "R$ 314,37",
        image: "Diamante%20Sensitive.jpg" // Ajuste o caminho da imagem
    },
    "blindagem": {
        title: "Blindagem",
        description: "Crie um escudo invisível contra líquidos e manchas. Aplicando a hidrorrepelência a líquidos, produto profissional que cria uma barreira protetora contra líquidos e sujeiras, facilitando a limpeza futura e preservando o investimento no seu estofado. Ideal para prolongar a aparência de novo do estofado ao máximo, pois evitará a sujeira.",
        benefits: [
            "Repele água, óleos e líquidos",
            "Protege contra manchas",
            "Mantém o tecido limpo por muito mais tempo",
            "Prolonga a vida útil do estofado"
        ],
        price: "R$ 349,00",
        promoPrice: "R$ 219,87",
        image: "Blindagem.jpg" // Ajuste o caminho da imagem
    },
    "limpeza-titan": {
        title: "Limpeza Titan",
        description: "Poder de limpeza com excelente custo-benefício. Essa opção entrega uma limpeza eficiente para estofados e é bactericida, mantendo qualidade com economia.",
        benefits: [
            "Limpeza eficiente e econômica",
            "Ação bactericida",
            "Excelente custo-benefício",
            "Qualidade garantida"
        ],
        price: "R$ 349,00",
        promoPrice: "R$ 219,87",
        image: "Limpeza%20Titan.jpg" // Ajuste o caminho da imagem
    },
    "auto-golden-care": {
        title: "Auto Golden Care",
        description: "Higienização especializada com remoção de sujeiras, manchas e odores, preservando materiais, com proteção residual de 6 meses.",
        benefits: [
            "Remoção de manchas e odores",
            "Ambiente interno mais agradável",
            "Remoção da sujidade",
            "Eliminação de 99,9% das bactérias",
            "Ação prolongada contra recontaminação de até 6 meses",
            "Realce imediato de cor e textura",
            "Toque suave e aparência de novo",
            "Ficando a critério escolher ou bancos ou tapetes, carpetes e estofados"
        ],
        price: "R$ 570,00",
        promoPrice: "R$ 359,10",
        image: "Auto%20Golden%20Care.png" // Ajuste o caminho da imagem
    },
    "auto-platina-lux": {
        title: "Auto Platina Lux",
        description: "Higienização premium de bancos, tapetes, carpete e porta-malas com proteção residual de 6 meses.",
        benefits: [
            "Higienização completa de bancos, tapetes, carpete e porta-malas",
            "Acabamento premium",
            "Renovação do interior do veículo",
            "Remoção de manchas e odores",
            "Ambiente interno mais agradável",
            "Remoção da sujidade",
            "Eliminação de 99,9% das bactérias",
            "Ação prolongada contra recontaminação de até 6 meses",
            "Realce imediato de cor e textura",
            "Toque suave e aparência de novo"
        ],
        price: "R$ 750,00",
        promoPrice: "R$ 472,50",
        image: "Auto%20Platina%20Lux.png" // Ajuste o caminho da imagem
    },
    "auto-diamond": {
        title: "Auto Diamond",
        description: "Limpeza completa: bancos, carpete, teto, laterais e porta-malas. Com combinação personalizada de produtos para manchas e sujeiras específicas, preservando o tecido, com proteção residual de 6 meses.",
        benefits: [
            "Tratamento químico sob medida para remoção da sujeira com mais eficiência",
            "Limpeza abrangente de todo o interior do veículo",
            "Produtos personalizados para manchas específicas",
            "Preservação do tecido e materiais",
            "Acabamento premium",
            "Renovação do interior do veículo",
            "Remoção de manchas e odores",
            "Ambiente interno mais agradável",
            "Remoção da sujidade",
            "Eliminação de 99,9% das bactérias",
            "Ação prolongada contra recontaminação de até 6 meses",
            "Realce imediato de cor e textura",
            "Toque suave e aparência de novo",
            "Proteção contra desgaste precoce, diminuindo a esfregação",
            "Preservação da originalidade do estofado",
            "Toque suave e aparência de novo"
        ],
        price: "R$ 910,00",
        promoPrice: "R$ 573,30",
        image: "Auto%20Diamond.jpg" // Ajuste o caminho da imagem
    },
    "auto-blindagem-impermax": {
        title: "Auto Blindagem Impermax",
        description: "Proteção hidrorepelente para bancos e carpete.",
        benefits: [
            "Proteção contra líquidos e manchas nos bancos e carpete",
            "Facilita a limpeza futura",
            "Prolonga a vida útil dos estofados automotivos",
            "Mantém o interior do carro com aparência de novo"
        ],
        price: "R$ 400,00",
        promoPrice: "R$ 252,00",
        image: "Auto%20Blindagem%20Impermax.png" // Ajuste o caminho da imagem
    },
    "auto-titan": {
        title: "Auto Titan",
        description: "Limpeza econômica de bancos, tapetes e carpetes ou forros, a depender do veículo.",
        benefits: [
            "Limpeza econômica e eficiente para o interior do veículo",
            "Foco em áreas de maior uso (bancos, tapetes, carpetes - alternativamente)",
            "Ação bactericida",
            "Opção flexível dependendo do veículo",
            "Custo-benefício ideal"
        ],
        price: "R$ 520,00",
        promoPrice: "R$ 327,60",
        image: "Auto%20Titan.jpg" // Ajuste o caminho da imagem
    }
};

// Função para carregar os detalhes do serviço na página sobre-servicos.html
function loadServiceDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceKey = urlParams.get('service');

    const serviceDetailContent = document.getElementById('service-detail-content');
    const serviceTitle = document.getElementById('service-title');
    const serviceDescription = document.getElementById('service-description');
    const serviceBenefitsList = document.getElementById('service-benefits');
    const otherServicesGrid = document.getElementById('other-services-grid');

    if (serviceKey && serviceData[serviceKey]) {
        const service = serviceData[serviceKey];

        serviceTitle.textContent = service.title;
        serviceDescription.textContent = service.description;

        // Limpa e preenche os benefícios
        serviceBenefitsList.innerHTML = '';
        service.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            serviceBenefitsList.appendChild(li);
        });

        // Preenche a grade de outros serviços (simulando carrossel)
        otherServicesGrid.innerHTML = '';
        for (const key in serviceData) {
            if (key !== serviceKey) { // Não exibe o serviço atual
                const otherService = serviceData[key];
                const catalogItem = document.createElement('div');
                catalogItem.classList.add('catalog-item');
                catalogItem.innerHTML = `
                    <div class="discount-badge">37% OFF</div>
                    <img src="${otherService.image}" alt="${otherService.title}">
                    <h3>${otherService.title}</h3>
                    <p class="price-original">De ${otherService.price}</p>
                    <p class="price-base">Por ${otherService.promoPrice}</p>
                    <p class="item-description">${otherService.description.substring(0, 100)}...</p>
                    <a href="sobre-servicos.html?service=${key}" class="btn btn-primary btn-small">Saiba Mais</a>
                `;
                otherServicesGrid.appendChild(catalogItem);
            }
        }
    } else if (serviceDetailContent) {
        // Se nenhum serviço específico for selecionado, exibe uma mensagem padrão ou o primeiro serviço
        serviceTitle.textContent = "Bem-vindo à Seção de Serviços!";
        serviceDescription.textContent = "Navegue pelos nossos serviços detalhados para encontrar a solução ideal para você. Clique em qualquer serviço abaixo para ver mais informações.";
        serviceBenefitsList.innerHTML = ''; // Limpa benefícios se não houver serviço específico

        // Preenche a grade com todos os serviços se nenhum for especificado
        otherServicesGrid.innerHTML = '';
        for (const key in serviceData) {
            const service = serviceData[key];
            const catalogItem = document.createElement('div');
            catalogItem.classList.add('catalog-item');
            catalogItem.innerHTML = `
                <div class="discount-badge">37% OFF</div>
                <img src="${service.image}" alt="${service.title}">
                <h3>${service.title}</h3>
                <p class="price-original">De ${service.price}</p>
                <p class="price-base">Por ${service.promoPrice}</p>
                <p class="item-description">${service.description.substring(0, 100)}...</p>
                <a href="sobre-servicos.html?service=${key}" class="btn btn-primary btn-small">Saiba Mais</a>
            `;
            otherServicesGrid.appendChild(catalogItem);
        }
    }
}

// Chama a função ao carregar a página, se for a página sobre-servicos.html
if (window.location.pathname.includes('sobre-servicos.html')) {
    document.addEventListener('DOMContentLoaded', loadServiceDetails);
}

// --- Lógica do Carrossel de Resultados (Página resultados.html) ---
// ATENÇÃO: Atualize os caminhos das imagens aqui para suas imagens de alta resolução
const resultsData = [
    {
        title: "Sofá da Sala",
        before: "Sofa%20Sala%20Antes.jpg", // Caminho da imagem de alta resolução
        after: "Sofa%20Sala%20Depois.jpg"  // Caminho da imagem de alta resolução
    },
    {
        title: "Colchão de Casal",
        before: "Colchao%20Casal%20Antes.jpg", // Caminho da imagem de alta resolução
        after: "Colchao%20Casal%20Depois.jpg"  // Caminho da imagem de alta resolução
    },
    {
        title: "Cama de Casal",
        before: "CamaCasal2Antes.jpg", // Caminho da imagem de alta resolução
        after: "CamaCasal2Depois.jpg"  // Caminho da imagem de alta resolução
    },
    {
        title: "Colchão de Casal 3",
        before: "CamaCasal3Antes.jpg", // Caminho da imagem de alta resolução
        after: "CamaCasal3Depois.jpg"  // Caminho da imagem de alta resolução
    },
    {
        title: "Sofá Sala 2",
        before: "Sofa2Antes.jpg", // Caminho da imagem de alta resolução
        after: "Sofa2Depois.jpg"  // Caminho da imagem de alta resolução
    },
    {
        title: "Cadeira de Jantar", // Adicionado o item que faltava
        before: "Cadeira%20Jantar%20Antes.jpg", // Caminho da imagem de alta resolução
        after: "Cadeira%20Jantar%20Depois.jpg"  // Caminho da imagem de alta resolução
    }
];

let currentIndex = 0;
let itemsPerPage = 1;

function updateCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!carouselTrack) return;

    const itemWidth = carouselTrack.children[0] ? carouselTrack.children[0].offsetWidth : 0;
    carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= resultsData.length - itemsPerPage;
}

function populateCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    if (!carouselTrack) return;

    carouselTrack.innerHTML = '';
    resultsData.forEach(item => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        carouselItem.innerHTML = `
            <h3 class="item-title">${item.title}</h3>
            <div class="img-comparison">
                <div class="img-wrapper">
                    <img src="${item.before}" alt="${item.title} - Antes">
                    <p class="label">Antes</p>
                    <button class="zoom-button" onclick="openModal('${item.before}')"><i class="fas fa-search-plus"></i> Ampliar</button>
                </div>
                <div class="img-wrapper">
                    <img src="${item.after}" alt="${item.title} - Depois">
                    <p class="label">Depois</p>
                    <button class="zoom-button" onclick="openModal('${item.after}')"><i class="fas fa-search-plus"></i> Ampliar</button>
                </div>
            </div>
        `;
        carouselTrack.appendChild(carouselItem);
    });

    function adjustItemsPerPage() {
        if (window.innerWidth <= 768) {
            itemsPerPage = 1;
        } else {
            itemsPerPage = 1;
        }
        updateCarousel();
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentIndex < resultsData.length - itemsPerPage) {
            currentIndex++;
            updateCarousel();
        }
    });

    window.addEventListener('resize', adjustItemsPerPage);
    adjustItemsPerPage();
}

// Funções para o Modal de Imagem
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const zoomSlider = document.getElementById("zoomSlider");
    
    modal.classList.add("show");
    modalImg.src = imageSrc;
    modalImg.style.transform = "scale(1)";
    zoomSlider.value = 100;
    
    // Desabilita o scroll da página quando o modal está aberto
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.remove("show");
    
    // Reabilita o scroll da página
    document.body.style.overflow = "auto";
}

function adjustZoom() {
    const modalImg = document.getElementById("modalImage");
    const zoomSlider = document.getElementById("zoomSlider");
    const zoomValue = zoomSlider.value;
    modalImg.style.transform = `scale(${zoomValue / 100})`;
}

// Fechar o modal ao clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Fechar o modal com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Chama a função ao carregar a página, se for a página resultados.html
if (window.location.pathname.includes('resultados.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        populateCarousel();
        // Os event listeners já são adicionados dentro de populateCarousel(), não precisa repetir aqui
    });
}

// --- Funcionalidades Adicionais ---

// 1. Proteção Anticópia (Bloqueia seleção e clique direito)
document.addEventListener('DOMContentLoaded', () => {
    const noCopyElements = document.querySelectorAll('.no-copy');

    noCopyElements.forEach(element => {
        element.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Bloqueia o clique direito
        });

        element.addEventListener('selectstart', (e) => {
            e.preventDefault(); // Bloqueia a seleção de texto
        });

        element.addEventListener('copy', (e) => {
            e.preventDefault(); // Bloqueia a cópia
            alert('Conteúdo protegido contra cópia.');
        });

        // Opcional: Bloquear arrastar e soltar (para imagens, por exemplo)
        element.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    });
});

// 2. Alternar Modo Claro/Escuro
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Verifica a preferência do usuário no localStorage ou no sistema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-mode') {
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Ícone de sol para dark mode
        } else {
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Ícone de lua para light mode
        }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não houver preferência salva, verifica a preferência do sistema
        body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light-mode');
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Mudar para ícone de lua
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Mudar para ícone de sol
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});

// 3. Ocultar conteúdo se JavaScript estiver desativado (já implementado com <noscript>)
// A tag <noscript> no HTML já cuida disso. Se o JavaScript estiver desativado, o CSS dentro de <noscript> será aplicado, ocultando o body.

// 4. Proteção Anti-impressão (já implementado no CSS com @media print)
// A regra `@media print` no `style.css` já oculta o `body` por padrão ao tentar imprimir.
// Se você adicionou a classe `no-print` a elementos específicos, eles serão ocultados.

// --- Novo: Botão de Compartilhamento ---
document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('shareButton');
    if (shareButton) {
        shareButton.addEventListener('click', async () => {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: document.title,
                        url: window.location.href
                    });
                    console.log('Página compartilhada com sucesso!');
                } catch (error) {
                    console.error('Erro ao compartilhar:', error);
                }
            } else {
                // Fallback para navegadores que não suportam a API Web Share
                alert('Seu navegador não suporta a função de compartilhamento. Você pode copiar o link manualmente: ' + window.location.href);
            }
        });
    }
});

// --- Novo: Bloqueio contra Captura de Tela (Experimental e Limitado) ---
// Esta funcionalidade é experimental e sua eficácia pode variar significativamente
// entre navegadores, sistemas operacionais e dispositivos. Não é uma garantia de segurança.

document.addEventListener('DOMContentLoaded', () => {
    // Bloqueio para navegadores baseados em Chromium (Chrome, Edge, Brave, etc.)
    // Tenta usar a API `captureStream` para criar um "stream vazio"
    // que pode interferir com algumas ferramentas de captura.
    // A eficácia é limitada e pode não funcionar em todos os cenários.
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        try {
            // Tenta obter um stream de tela, mas não o usa.
            // Em alguns casos, isso pode acionar avisos de privacidade
            // ou impedir a captura de tela em certas configurações.
            // É uma abordagem "hacky" e não confiável.
            navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
                .then(stream => {
                    // Não faz nada com o stream, apenas o obtém.
                    // Pode ser necessário parar o stream para evitar consumo de recursos.
                    // stream.getTracks().forEach(track => track.stop());
                    console.log("Tentativa de bloqueio de captura de tela ativada (Chromium-based).");
                })
                .catch(err => {
                    console.warn("Não foi possível ativar o bloqueio de captura de tela (Chromium-based):", err);
                });
        } catch (e) {
            console.error("Erro ao tentar ativar o bloqueio de captura de tela (Chromium-based):", e);
        }
    }

    // Bloqueio para navegadores que suportam a propriedade `-webkit-user-select: none;`
    // e `user-select: none;` (já coberto pelo CSS no-copy, mas reforçado aqui)
    document.body.style.webkitUserSelect = 'none'; // Para navegadores WebKit
    document.body.style.userSelect = 'none';     // Padrão

    // Bloqueio de eventos de teclado comuns para captura de tela (Print Screen, Alt+Print Screen)
    // Isso é facilmente contornável e pode interferir na usabilidade.
    document.addEventListener('keydown', (e) => {
        if (e.key === 'PrintScreen' || (e.altKey && e.key === 'PrintScreen')) {
            e.preventDefault();
            alert('Captura de tela desativada para esta página.');
        }
    });

    // Bloqueio de eventos de teclado para desenvolvedores (F12, Ctrl+Shift+I, etc.)
    // Isso também é facilmente contornável e pode ser irritante para usuários legítimos.
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'J')) {
            e.preventDefault();
            alert('Ferramentas de desenvolvedor desativadas para esta página.');
        }
    });

    // Bloqueio de clique direito (já coberto pelo no-copy, mas reforçado)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // Bloqueio de arrastar e soltar (já coberto pelo no-copy, mas reforçado)
    document.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

    // Bloqueio de cópia (já coberto pelo no-copy, mas reforçado)
    document.addEventListener('copy', (e) => {
        e.preventDefault();
        alert('Conteúdo protegido contra cópia.');
    });

    // Bloqueio de seleção de texto (já coberto pelo no-copy, mas reforçado)
    document.addEventListener('selectstart', (e) => {
        e.preventDefault();
    });

    // Adiciona uma camada transparente sobre o conteúdo para tentar dificultar a captura
    // Isso pode afetar a interatividade e a acessibilidade.
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '9999'; // Abaixo dos botões flutuantes, mas acima do conteúdo
    overlay.style.pointerEvents = 'none'; // Permite cliques através da overlay
    overlay.style.backgroundColor = 'rgba(0,0,0,0.000001)'; // Quase transparente
    document.body.appendChild(overlay);

    // Adiciona um evento para detectar quando a janela perde o foco (pode indicar troca de aplicativo para captura)
    window.addEventListener('blur', () => {
        console.log('Janela perdeu o foco. Possível tentativa de captura de tela.');
        // Você pode adicionar lógica aqui, como exibir uma mensagem ou escurecer a tela.
    });
});