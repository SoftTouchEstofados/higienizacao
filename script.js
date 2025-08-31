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
        image: "Renovacao%20Premium.jpg"
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
        image: "Diamante%20Especializada.jpg"
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
        image: "Renovacao%20Sensitive.jpg"
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
        image: "Diamante%20Sensitive.jpg"
    },
    "blindagem": {
        title: "Blindagem",
        description: "Crie um escudo invisível contra líquidos e manchas. Aplicando a hidrorrepelência a líquidos, produto profissional que cria uma barreira protetora contra líquidos e sujeiras, facilitando a limpeza futura e preservando o investimento no seu estofado. Ideal para prolongar a aparência de novo do estofado ao máximo, pois evitará a sujeira.",
        benefits: [
            "Repele água, óleos và líquidos",
            "Protege contra manchas",
            "Mantém o tecido limpo por muito mais tempo",
            "Prolonga a vida útil do estofado"
        ],
        price: "R$ 349,00",
        promoPrice: "R$ 219,87",
        image: "Blindagem.jpg"
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
        image: "Limpeza%20Titan.jpg"
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
            "Ficando a critério escolher ou bancos ou tapetes, carpetes và estofados"
        ],
        price: "R$ 570,00",
        promoPrice: "R$ 359,10",
        image: "Auto%20Golden%20Care.png"
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
        image: "Auto%20Platina%20Lux.png"
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
        image: "Auto%20Diamond.jpg"
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
        image: "Auto%20Blindagem%20Impermax.png"
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
        image: "Auto%20Titan.jpg"
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
        title: "Banco do Carro",
        before: "Banco%20Carro%20Antes.jpg", // Caminho da imagem de alta resolução
        after: "Banco%20Carro%20Depois.jpg"  // Caminho da imagem de alta resolução
    },
    {
        title: "Colchão de Casal",
        before: "Colchao%20Casal%20Antes.jpg", // Caminho da imagem de alta resolução
        after: "Colchao%20Casal%20Depois.jpg"  // Caminho da imagem de alta resolução
    },
    {
        title: "Cadeira de Jantar",
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
        
        // Adiciona event listeners para os botões de navegação do carrossel
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
    });
}

// --- Funcionalidades Adicionais (Frontend Stubs) ---

// 1. Contagem de Acessos (Frontend - apenas um placeholder)
// Para uma contagem real, você precisaria de um backend ou Google Analytics.
// Exemplo de placeholder:
// if (localStorage.getItem('site_visits')) {
//     let visits = parseInt(localStorage.getItem('site_visits'));
//     visits++;
//     localStorage.setItem('site_visits', visits);
// } else {
//     localStorage.setItem('site_visits', 1);
// }
// console.log("Total de visitas (local):", localStorage.getItem('site_visits'));

// 2. Chat (Frontend - apenas um placeholder)
// Para um chat funcional, você precisaria integrar uma plataforma de chat de terceiros.
// Exemplo de botão de chat flutuante (adicione ao HTML se quiser):
/*
<div style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
    <button style="background-color: #2ecc71; color: white; border: none; border-radius: 50%; width: 60px; height: 60px; font-size: 24px; cursor: pointer; box-shadow: 0 2px 10px rgba(0,0,0,0.2);" onclick="openChat()">
        <i class="fab fa-whatsapp"></i>
    </button>
</div>
<script>
    function openChat() {
        // Substitua pelo link do seu WhatsApp ou script de chat
        window.open('https://wa.me/+5519991908256', '_blank');
    }
</script>
*/

// 3. Login (Frontend - apenas um placeholder)
// Para um sistema de login funcional, você precisaria de um backend para autenticação.
// Exemplo de formulário de login (adicione ao HTML se quiser):
/*
<div id="loginModal" style="display:none; position: fixed; z-index: 1001; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);">
    <div style="background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%; max-width: 400px; border-radius: 10px; text-align: center;">
        <h2>Login</h2>
        <input type="text" placeholder="Usuário" style="width: calc(100% - 20px); padding: 10px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 5px;">
        <input type="password" placeholder="Senha" style="width: calc(100% - 20px); padding: 10px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 5px;">
        <button style="background-color: #6a89cc; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;" onclick="performLogin()">Entrar</button>
        <button style="background-color: #ccc; color: #333; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-left: 10px;" onclick="closeLoginModal()">Fechar</button>
    </div>
</div>
<script>
    function openLoginModal() {
        document.getElementById('loginModal').style.display = 'block';
    }
    function closeLoginModal() {
        document.getElementById('loginModal').style.display = 'none';
    }
    function performLogin() {
        alert('Funcionalidade de login requer backend.');
        // Aqui você enviaria os dados para um servidor para autenticação
    }
</script>
*/