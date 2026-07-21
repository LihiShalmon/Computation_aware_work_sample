# Doublespeak text-only auditing MVP

This repository tests whether semantic remapping creates a blind spot for a
separate prompt-only LLM auditor.

For each example, one fresh call checks whether the target model adopts the
remapped meaning. A second call sees only the original prompt and audits it for
remapping. A blind spot requires successful target adoption and an auditor miss.

## Results

The benchmark used 10 remapping attacks and 10 matched clean controls per model.
GPT-5.6-sol, GPT-4o, and GPT-3.5-turbo all produced the same result: 100% target
adoption, 100% auditor sensitivity, 100% mapping recovery, no false positives,
and no blind spots.

This is a ceiling result: the remappings succeeded, but the current attacks were
too easy to demonstrate an advantage for internal-state monitoring.

## Run

```powershell
pip install -r requirements.txt
$env:OPENAI_API_KEY="your-key-here"
python doublespeak_mvp.py
python compare_models.py
```

Do not commit an API key. The scripts read it only from `OPENAI_API_KEY`.

## Repository contents

- `doublespeak_mvp.py`: dataset, target call, auditor call, scoring, and reporting.
- `compare_models.py`: runs the same benchmark across the configured models.
- `model_comparison_results.csv`: combined example-level results.
- `model_comparison_summary.csv`: model-level metrics.
- `model_comparison.md`: concise comparison report.
