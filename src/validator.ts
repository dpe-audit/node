import type { IAudit } from './audit'
import type { IDiagnostic } from './diagnostic'

export const validateAudit = (data: IAudit): boolean => true
export const validateDiagnostic = (data: IDiagnostic): boolean => true
