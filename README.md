# DPEAudit API - Node.js

Wrapper de l'API DPE-Audit pour Node.js.

> [!IMPORTANT]  
> Projet en cours de développement

## Installation

```
npm i dpe-audit
```

## Usage

```
import DPEAudit from 'dpe-audit'

const audits = await DPEAudit.audit.searchAudits({ page: 1}) // [{...}]
```
