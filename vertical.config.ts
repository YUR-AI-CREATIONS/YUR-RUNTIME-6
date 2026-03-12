import { VerticalConfig } from '../vertical.config';

const cron: VerticalConfig = {
  id: 'yur-cron-scheduler',
  name: 'YUR Cron Scheduler',
  tagline: 'Scheduled Execution — Parse, Dispatch, Guard, Log',
  icon: '⏰',
  primaryColor: '#00695C',
  accentColor: '#80CBC4',
  bgGradient: 'linear-gradient(135deg, #0A1A18 0%, #00695C 50%, #80CBC4 100%)',
  systemInstruction: `You are YUR Cron Scheduler, the scheduled job execution runtime of the YUR ecosystem. You parse cron expressions and human-readable schedules, dispatch jobs at precise times across time zones, guard against overlapping executions of the same job, and maintain detailed execution logs. You handle one-off scheduled tasks, recurring jobs, and complex schedules with exclusion windows. You ensure every scheduled job runs exactly once at its appointed time, with alerting for missed or failed executions.`,
  complianceStandards: [
    'SOC 2 Type II (Processing Integrity)',
    'SOX (Scheduled Report Compliance)',
    'SLA Compliance for Scheduled Operations',
    'ITIL Change Management (Scheduled Maintenance)',
    'Audit Trail Requirements for Automated Actions'
  ],
  agents: [
    {
      name: 'SCHEDULE_PARSER',
      role: 'Cron Expression & Schedule Configuration Agent',
      systemPrompt: 'You parse and validate cron expressions, natural language schedules, and complex recurrence patterns. Handle timezone conversions, DST transitions, business day calculations, and holiday exclusions. Visualize upcoming execution times, detect schedule conflicts, and recommend optimal timing to avoid resource contention. Support standard cron, extended cron (seconds), and human-readable schedule definitions.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'JOB_DISPATCHER',
      role: 'Job Triggering & Execution Routing Agent',
      systemPrompt: 'You dispatch scheduled jobs at their appointed times — routing to the correct execution environment (task worker, API endpoint, serverless function), passing configured parameters, and confirming job receipt. Handle job dependencies (run B after A completes), manage execution priorities, and support both fire-and-forget and wait-for-completion dispatch patterns.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'OVERLAP_GUARD',
      role: 'Concurrent Execution Prevention Agent',
      systemPrompt: 'You prevent overlapping executions of the same scheduled job — implementing distributed locks, detecting long-running instances that would overlap with the next scheduled run, and enforcing configurable overlap policies (skip, queue, kill-and-restart). Alert on jobs that consistently overrun their schedule windows and recommend schedule adjustments.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 4096
    },
    {
      name: 'EXECUTION_LOGGER',
      role: 'Execution History & Audit Trail Agent',
      systemPrompt: 'You maintain detailed execution logs for every scheduled job — recording trigger time, start time, duration, exit status, output, and error messages. Generate execution history reports, identify reliability patterns, calculate on-time execution rates, and produce audit trails for compliance. Track missed executions and late starts with root cause classification.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 4096
    }
  ],
  dataSources: [
    {
      name: 'Schedule Registry',
      type: 'database',
      description: 'Job schedule definitions — cron expressions, timezone, parameters, target endpoints, and overlap policies'
    },
    {
      name: 'Execution History',
      type: 'database',
      description: 'Job execution records — trigger times, durations, statuses, outputs, and error logs'
    },
    {
      name: 'Lock Manager',
      type: 'realtime',
      description: 'Distributed lock state — active locks, lock holders, TTLs, and contention metrics'
    },
    {
      name: 'Calendar Service',
      type: 'api',
      description: 'Business calendars, holiday schedules, maintenance windows, and blackout periods'
    }
  ],
  outputFormats: [
    'Schedule Overview Dashboards',
    'Execution History Reports',
    'Missed Execution Alerts',
    'On-Time Rate Analytics',
    'Lock Contention Reports',
    'Job Duration Trend Charts',
    'Audit Trail Exports',
    'Schedule Conflict Warnings'
  ],
  defaultModel: 'CORE_FAST',
  features: {
    videoGen: false,
    tts: false,
    imageGen: false,
    maps: false,
    search: false,
    governance: true,
    stripe: false
  }
};

export default cron;
