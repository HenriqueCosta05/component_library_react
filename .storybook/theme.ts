import { create } from '@storybook/theming/create';
import type { ThemeVars } from '@storybook/theming';

const theme: ThemeVars = create({
    base: 'dark',

    // Typography
    fontBase: '"Red Hat Display", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'DevNest',
    brandUrl: 'https://henriquebenedictocosta.vercel.app/',
    brandImage: 'https://i.ibb.co/7DY5Z2s/Logo.png',
    brandTarget: '_self',

    // Colors
    colorPrimary: '#FFD700', // Amarelo mais suave
    colorSecondary: '#3A3A3A', // Cinza médio para contrastar melhor

    // UI
    appBg: '#1E1E1E', // Fundo mais escuro para uniformidade
    appContentBg: '#2B2B2B', // Cinza mais escuro para melhorar a visibilidade
    appBorderColor: '#FFD700', // Mantendo o amarelo para destaque
    appBorderRadius: 6,

    // Toolbar (barra superior)
    barBg: '#292826', // Mantendo um tom escuro para coerência
    barTextColor: '#FFFFFF', // Texto branco para melhor leitura
    barSelectedColor: '#FFD700', // Destaque nos itens selecionados
    barHoverColor: '#E6B800', // Um tom mais claro ao passar o mouse

    // Components
    inputBg: '#3F3F3F', // Fundo dos inputs mais contrastante
    inputBorder: '#FFD700',
    inputTextColor: '#FFFFFF',
    inputBorderRadius: 6,

    // Text colors
    textColor: '#FFFFFF',
    textInverseColor: '#292826',

});

export default theme;
