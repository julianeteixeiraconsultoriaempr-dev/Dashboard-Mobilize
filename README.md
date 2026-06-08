# Dashboard de Acompanhamento - Clínica Mobilize

Dashboard interativo para acompanhamento de indicadores operacionais e financeiros da Clínica Mobilize.

## 📊 Funcionalidades

- 📈 Gráficos de evolução de faturamento e ocupação
- 💰 Análise de receitas por modalidade (Pilates vs Fisioterapia)
- 📉 Estrutura de custos detalhada
- 🎯 Metas trimestrais com acompanhamento
- 📱 Design responsivo (funciona em desktop, tablet e mobile)
- 🔄 Fácil atualização mensal de dados

## 🚀 Como Usar

### Desenvolvimento Local
```bash
npm install
npm run dev
```

### Build para Produção
```bash
npm run build
```

### Deploy no Vercel
1. Conecte seu repositório GitHub ao Vercel
2. Vercel fará o build e deploy automaticamente

## 📝 Atualizar Dados Mensalmente

Edite o arquivo `src/App.jsx` e procure pela seção:

```javascript
const financeiro = {
  faturamento: 18500,        // Mude para seu faturamento real
  faturamentoPrev: 20000,    // Mude a meta
  inadimplencia: 4.2,        // Atualize
  ocupacao: 72,              // Atualize
  // ... resto dos dados
}
```

Após fazer as mudanças, o Vercel atualiza automaticamente!

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Recharts** - Biblioteca de gráficos
- **Vite** - Build tool
- **Vercel** - Hosting

## 📧 Contato

Desenvolvido para: Clínica Mobilize
Consultoria: Juliane Teixeira Consultoria Empresarial

---

**Versão 1.0** | Junho 2024
