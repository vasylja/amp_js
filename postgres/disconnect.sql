select
	pg_terminate_backend(pid)
from
	pg_stat_activity
where
	datname = 'amp' and
	pid <> pg_backend_pid();
