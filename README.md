# 🤖 Workflow Automation

> Набор сценариев и инструментов для автоматизации типовых задач, CI/CD-процессов и рабочих процессов.

[![CI/CD](https://github.com/ivanm696/Workflow-Automation/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/ivanm696/Workflow-Automation/actions/workflows/ci-cd.yml)
[![Лицензия](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Технологии](https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

## Описание

Этот проект предназначен для автоматизации типовых операций, связанных с процессами разработки, деплоя и сопровождения проектов. В репозитории собраны рабочие конфигурации, шаблоны CI/CD, а также инструменты для запуска и проверки рабочей среды.

### Что здесь есть

- автоматизированные GitHub Actions для проверки изменений;
- шаблоны конфигурации для Node.js-проекта;
- инструменты для локальной подготовки окружения и сборки;
- базовая структура монорепозитория с поддержкой pnpm.

## Требования

Перед запуском убедитесь, что установлены:

- Node.js 22.16+
- pnpm 10.18.3+
- Git

## Установка

```bash
git clone https://github.com/ivanm696/Workflow-Automation.git
cd Workflow-Automation
corepack enable
pnpm install
```

## Локальная разработка

```bash
# Сборка проекта
pnpm build

# Запуск проверок
pnpm exec tsc --noEmit

# Запуск тестов
pnpm test
```

## CI/CD

Проект включает рабочий процесс GitHub Actions:

- `.github/workflows/ci-cd.yml`

Он выполняет установку зависимостей, проверку TypeScript и базовую валидацию проекта при пушах и pull request.

## Структура проекта

```text
.
├── .github/
│   └── workflows/
├── LICENSE
├── README.md
├── pnpm-workspace.yaml
├── tsconfig.json
├── turbo.json
├── биом.jsonc
├── пакет.json
└── ...
```

## Вклад

Если вы хотите внести изменения, создайте форк репозитория, откройте ветку с новой функцией и отправьте Pull Request.

## Лицензия

Проект распространяется под лицензией Apache License 2.0. Подробности см. в файле [LICENSE](LICENSE).
