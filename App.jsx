import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function DashboardMobilize() {
  const [mes, setMes] = useState('Junho');

  // Dados - atualizar mensalmente
  const financeiro = {
    faturamento: 18500,
    faturamentoPrev: 20000,
    inadimplencia: 4.2,
    receber: 2100,
    ocupacao: 72,
    ocupacaoPrev: 75,
    margin: 58
  };

  const kpisMensais = [
    { mes: 'Março', faturamento: 16200, ocupacao: 65, churn: 12, nps: 7.5 },
    { mes: 'Abril', faturamento: 17100, ocupacao: 68, churn: 11, nps: 7.8 },
    { mes: 'Maio', faturamento: 17800, ocupacao: 70, churn: 10, nps: 8.1 },
    { mes: 'Junho', faturamento: 18500, ocupacao: 72, churn: 9, nps: 8.3 }
  ];

  const receita = [
    { modalidade: 'Pilates', valor: 10200, perc: 55 },
    { modalidade: 'Fisioterapia', valor: 8300, perc: 45 }
  ];

  const custos = [
    { categoria: 'Pessoal', valor: 7500 },
    { categoria: 'Aluguel', valor: 3000 },
    { categoria: 'Materiais', valor: 1200 },
    { categoria: 'Utilities', valor: 800 },
    { categoria: 'Outros', valor: 600 }
  ];

  const ocupacaoPorHorario = [
    { horario: '7h-8h', pilates: 85, fisio: 70 },
    { horario: '9h-10h', pilates: 92, fisio: 88 },
    { horario: '14h-15h', pilates: 78, fisio: 75 },
    { horario: '18h-19h', pilates: 95, fisio: 92 },
    { horario: '19h-20h', pilates: 88, fisio: 80 }
  ];

  const COLORS = ['#2E75B6', '#70AD47', '#FFC000', '#FF6B6B', '#4ECDC4'];

  return (
    <div style={{ padding: '30px', backgroundColor: '#f5f5f5', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px', backgroundColor: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#2E75B6', margin: '0 0 10px 0', fontSize: '28px' }}>📊 Dashboard de Acompanhamento</h1>
        <p style={{ color: '#666', margin: '0', fontSize: '14px' }}>Clínica Mobilize - Pilates & Fisioterapia</p>
        <p style={{ color: '#999', margin: '5px 0 0 0', fontSize: '12px' }}>Período de Reestruturação: Junho - Agosto 2024</p>
      </div>

      {/* KPIs Principais */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <KPICard
          titulo="Faturamento"
          valor={`R$ ${financeiro.faturamento.toLocaleString('pt-BR')}`}
          meta={`Meta: R$ ${financeiro.faturamentoPrev.toLocaleString('pt-BR')}`}
          status={financeiro.faturamento >= financeiro.faturamentoPrev ? 'success' : 'warning'}
          variacao={(((financeiro.faturamento - financeiro.faturamentoPrev) / financeiro.faturamentoPrev) * 100).toFixed(1)}
          corVariacao={financeiro.faturamento >= financeiro.faturamentoPrev ? 'green' : 'red'}
        />
        <KPICard
          titulo="Ocupação de Salas"
          valor={`${financeiro.ocupacao}%`}
          meta={`Meta: ${financeiro.ocupacaoPrev}%`}
          status={financeiro.ocupacao >= financeiro.ocupacaoPrev ? 'success' : 'warning'}
          variacao={((financeiro.ocupacao - financeiro.ocupacaoPrev)).toFixed(1)}
          corVariacao={financeiro.ocupacao >= financeiro.ocupacaoPrev ? 'green' : 'red'}
        />
        <KPICard
          titulo="Inadimplência"
          valor={`${financeiro.inadimplencia}%`}
          meta="Meta: < 5%"
          status={financeiro.inadimplencia <= 5 ? 'success' : 'warning'}
          variacao={financeiro.inadimplencia <= 5 ? 'Controlado' : 'Acima'}
          corVariacao={financeiro.inadimplencia <= 5 ? 'green' : 'red'}
        />
        <KPICard
          titulo="Margem Bruta"
          valor={`${financeiro.margin}%`}
          meta="Meta: > 55%"
          status={financeiro.margin > 55 ? 'success' : 'warning'}
          variacao={financeiro.margin > 55 ? 'Saudável' : 'Revisar'}
          corVariacao={financeiro.margin > 55 ? 'green' : 'orange'}
        />
      </div>

      {/* Gráficos Principais */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {/* Evolução de KPIs */}
        <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#2E75B6', marginTop: 0 }}>Evolução de Faturamento (últimos 4 meses)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={kpisMensais}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip formatter={(value) => `R$${value.toLocaleString('pt-BR')}`} />
              <Line type="monotone" dataKey="faturamento" stroke="#2E75B6" strokeWidth={2} name="Faturamento" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* NPS e Churn */}
        <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#2E75B6', marginTop: 0 }}>NPS e Taxa de Churn</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={kpisMensais}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="nps" stroke="#FFC000" strokeWidth={2} name="NPS (0-10)" />
              <Line yAxisId="right" type="monotone" dataKey="churn" stroke="#FF6B6B" strokeWidth={2} name="Churn (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Análise de Receitas e Custos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {/* Receita por Modalidade */}
        <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#2E75B6', marginTop: 0 }}>Faturamento por Modalidade</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={receita} cx="50%" cy="50%" labelLine={false} label={({ modalidade, valor }) => `${modalidade}: R$${(valor/1000).toFixed(1)}k`} outerRadius={80} fill="#8884d8" dataKey="valor">
                {receita.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `R$${value.toLocaleString('pt-BR')}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Custos */}
        <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#2E75B6', marginTop: 0 }}>Estrutura de Custos (Junho)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={custos}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="categoria" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip formatter={(value) => `R$${value.toLocaleString('pt-BR')}`} />
              <Bar dataKey="valor" fill="#FF6B6B" name="Custo (R$)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ocupação por Horário */}
      <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
        <h3 style={{ color: '#2E75B6', marginTop: 0 }}>Taxa de Ocupação por Horário</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ocupacaoPorHorario}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="horario" />
            <YAxis />
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
            <Bar dataKey="pilates" fill="#2E75B6" name="Pilates (%)" />
            <Bar dataKey="fisio" fill="#70AD47" name="Fisioterapia (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Metas Trimestrais */}
      <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
        <h3 style={{ color: '#2E75B6', marginTop: 0 }}>🎯 Metas do Período (Junho-Agosto)</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ backgroundColor: '#E7F0F7', borderBottom: '2px solid #2E75B6' }}>
              <th style={{ padding: '12px', textAlign: 'left', color: '#2E75B6', fontWeight: 'bold' }}>Objetivo</th>
              <th style={{ padding: '12px', textAlign: 'center', color: '#2E75B6', fontWeight: 'bold' }}>Junho</th>
              <th style={{ padding: '12px', textAlign: 'center', color: '#2E75B6', fontWeight: 'bold' }}>Julho</th>
              <th style={{ padding: '12px', textAlign: 'center', color: '#2E75B6', fontWeight: 'bold' }}>Agosto</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px', color: '#333' }}>Faturamento (R$)</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>18.500</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>19.500</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>20.000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px', color: '#333' }}>Ocupação (%)</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>72%</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>74%</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>75%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px', color: '#333' }}>Inadimplência (%)</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>4,2%</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>3,5%</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>{'<'}3%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px', color: '#333' }}>Taxa de Churn (%)</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>9%</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>7%</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>{'<'}5%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px', color: '#333' }}>NPS (0-10)</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>8,3</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>8,5</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>8,8</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', color: '#333' }}>Margem Bruta (%)</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>58%</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>59%</td>
              <td style={{ padding: '12px', textAlign: 'center', color: '#666' }}>60%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'center', color: '#666', fontSize: '12px' }}>
        <p>📅 Última atualização: Junho 2024 | 📧 Responsável: Kalindia (Financeiro) & Simone (Operacional)</p>
        <p>🔄 Atualizar mensalmente até 5º dia útil | ⏰ Reunião de análise: 2ª sexta de cada mês</p>
      </div>
    </div>
  );
}

function KPICard({ titulo, valor, meta, status, variacao, corVariacao }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderLeft: `4px solid ${status === 'success' ? '#70AD47' : '#FFC000'}`
    }}>
      <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{titulo}</p>
      <h2 style={{ color: '#2E75B6', margin: '0 0 8px 0', fontSize: '28px' }}>{valor}</h2>
      <p style={{ color: '#999', margin: '0 0 8px 0', fontSize: '11px' }}>{meta}</p>
      <p style={{ color: corVariacao, margin: 0, fontSize: '14px', fontWeight: 'bold' }}>
        {typeof variacao === 'number' ? `${variacao > 0 ? '+' : ''}${variacao}%` : variacao}
      </p>
    </div>
  );
}
