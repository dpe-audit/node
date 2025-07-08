<div align="center">
    <img width="auto" height="180" src="https://raw.githubusercontent.com/dpe-audit/.github/refs/heads/main/assets/logo.svg" alt="DPE-Audit">
</div>
<br/>
<p align="center">
	<a href="https://github.com/dpe-audit">
		Le projet
	</a>&nbsp;&nbsp;&nbsp;
	<a href="https://github.com/dpe-audit/opendata">
		Données ouvertes
	</a>&nbsp;&nbsp;&nbsp;
	<a href="https://github.com/dpe-audit/documentation">
		Documentation
	</a>&nbsp;&nbsp;&nbsp;
	<a href="https://github.com/dpe-audit/api">
		API
	</a>&nbsp;&nbsp;&nbsp;
	<a href="https://github.com/dpe-audit/migration">
		Migration
	</a>
</p>
<br/>

# DPE-Audit - Node

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
