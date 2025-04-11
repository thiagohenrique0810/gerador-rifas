/**
 * Classe principal para gerenciar o gerador de rifas
 */
class GeradorRifas {
    constructor() {
        this.form = document.getElementById('rifa-form');
        this.preview = document.getElementById('rifa-preview');
        this.btnImprimir = document.getElementById('btn-imprimir');
        this.btnSalvar = document.getElementById('btn-salvar');
        
        this.initializeEventListeners();
    }

    /**
     * Inicializa os event listeners do gerador
     */
    initializeEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        this.btnImprimir.addEventListener('click', () => this.imprimirRifa());
        this.btnSalvar.addEventListener('click', () => this.salvarPDF());
    }

    /**
     * Manipula o envio do formulário
     * @param {Event} e - Evento de submit do formulário
     */
    handleFormSubmit(e) {
        e.preventDefault();
        const formData = this.getFormData();
        this.gerarRifa(formData);
    }

    /**
     * Obtém os dados do formulário
     * @returns {Object} Dados do formulário
     */
    getFormData() {
        return {
            nome: document.getElementById('rifa-nome').value,
            premio: document.getElementById('rifa-premio').value,
            valor: document.getElementById('rifa-valor').value,
            data: document.getElementById('rifa-data').value,
            organizador: document.getElementById('rifa-organizador').value,
            quantidade: parseInt(document.getElementById('rifa-quantidade').value),
            layout: document.getElementById('rifa-layout').value
        };
    }

    /**
     * Gera a rifa com os dados fornecidos
     * @param {Object} data - Dados da rifa
     */
    gerarRifa(data) {
        const layout = new LayoutManager(data.layout);
        const rifaHTML = layout.gerarLayout(data);
        this.preview.innerHTML = rifaHTML;
        this.adicionarEventosNumeros();
    }

    /**
     * Adiciona eventos de clique aos números da rifa
     */
    adicionarEventosNumeros() {
        const numeros = this.preview.querySelectorAll('.numero');
        numeros.forEach(numero => {
            numero.addEventListener('click', () => {
                numero.classList.toggle('selecionado');
            });
        });
    }

    /**
     * Imprime a rifa
     */
    imprimirRifa() {
        window.print();
    }

    /**
     * Salva a rifa como PDF
     */
    async salvarPDF() {
        const element = this.preview;
        const opt = {
            margin: 1,
            filename: 'rifa.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        try {
            await html2pdf().set(opt).from(element).save();
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            alert('Erro ao gerar o PDF. Por favor, tente novamente.');
        }
    }
}

// Inicializa o gerador quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new GeradorRifas();
}); 