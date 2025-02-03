import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const config: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    'body-max-line-length': [RuleConfigSeverity.Disabled], // Make sure there is never a max-line-length by disabling the rule
    'footer-max-line-length': [RuleConfigSeverity.Disabled], // Make sure there is never a max-line-length by disabling the rule
  },
}

export default config