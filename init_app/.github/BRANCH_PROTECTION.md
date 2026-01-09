CI et protection de branche
===========================

1) Pipeline

- Le workflow CI est défini dans `.github/workflows/ci.yml` et se déclenche à chaque `push`.
- Il exécute au minimum deux étapes: `Install dependencies` et `Run tests`.

2) Exiger une Pull Request et la CI verte avant fusion

Pour empêcher les fusions directes et forcer la validation par PR + checks verts, activez la protection de branche sur la branche principale (ex: `main`) via l'interface GitHub ou la CLI `gh`.

Via l'interface GitHub:

- Settings > Branches > Branch protection rules
- Add rule pour `main`
- Cocher **Require a pull request before merging**
- Cocher **Require status checks to pass before merging** et sélectionner la vérification nommée `CI` (ou `CI / build`)
- (Optionnel) Cocher **Require pull request reviews** pour exiger des revues avant merge

Via la CLI `gh` (exemple):

```
gh api --method PUT /repos/{OWNER}/{REPO}/branches/main/protection \
  -f required_status_checks.strict=true \
  -f required_status_checks.contexts='["CI"]' \
  -f required_pull_request_reviews.required_approving_review_count=1 \
  -f enforce_admins=true
```

Remarque: ces réglages doivent être appliqués par un administrateur du dépôt. Une fois activés, il sera impossible de merger sans PR et sans que la CI soit verte.
