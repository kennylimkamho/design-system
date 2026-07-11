/* eslint-disable react/no-unescaped-entities */
import type { ReactNode } from 'react';

export function DoDont({
  good,
  goodCode,
  bad,
  badCode,
}: {
  good: ReactNode;
  goodCode?: string;
  bad: ReactNode;
  badCode?: string;
}) {
  return (
    <div className="dodont">
      <div className="dodont-card do">
        <p className="dodont-label">Do</p>
        <p className="dodont-body">{good}</p>
        {goodCode && <pre className="dodont-code">{goodCode}</pre>}
      </div>
      <div className="dodont-card dont">
        <p className="dodont-label">Don't</p>
        <p className="dodont-body">{bad}</p>
        {badCode && <pre className="dodont-code">{badCode}</pre>}
      </div>
    </div>
  );
}