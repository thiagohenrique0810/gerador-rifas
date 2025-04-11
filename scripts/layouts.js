/**
 * Classe para gerenciar os layouts das rifas
 */
class LayoutManager {
    constructor(layoutType) {
        this.layoutType = layoutType;
    }

    /**
     * Gera o HTML do layout selecionado
     * @param {Object} data - Dados da rifa
     * @returns {string} HTML gerado
     */
    gerarLayout(data) {
        const numerosHTML = this.gerarNumeros(data.quantidade);
        const infoHTML = this.gerarInfo(data);
        
        return `
            <div class="layout-${this.layoutType}">
                <div class="rifa-header">
                    <h2>${data.nome}</h2>
                </div>
                <div class="rifa-info">
                    ${infoHTML}
                </div>
                <div class="numeros-grid">
                    ${numerosHTML}
                </div>
            </div>
        `;
    }

    /**
     * Gera o HTML com as informações da rifa
     * @param {Object} data - Dados da rifa
     * @returns {string} HTML das informações
     */
    gerarInfo(data) {
        const dataFormatada = new Date(data.data).toLocaleDateString('pt-BR');
        return `
            <p><strong>Prêmio:</strong> ${data.premio}</p>
            <p><strong>Valor por Número:</strong> R$ ${parseFloat(data.valor).toFixed(2)}</p>
            <p><strong>Data do Sorteio:</strong> ${dataFormatada}</p>
            <p><strong>Organizador:</strong> ${data.organizador}</p>
        `;
    }

    /**
     * Gera o HTML dos números da rifa
     * @param {number} quantidade - Quantidade de números
     * @returns {string} HTML dos números
     */
    gerarNumeros(quantidade) {
        let numerosHTML = '';
        for (let i = 1; i <= quantidade; i++) {
            numerosHTML += `<div class="numero">${i}</div>`;
        }
        return numerosHTML;
    }
} 