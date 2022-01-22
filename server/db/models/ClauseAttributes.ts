export interface ClauseAttributes {
  readonly id: number;
  article: number;
  section: number;
  clause: number;
  name?: string;
  text: string;
  readonly createdAt?: Date;
  readonly updatedDate?: Date;

  // add assiciation to attribute interface later, something like"
  // cases?: CaseAttributes[];
  // clause?: ClauseAttributes[];
}
