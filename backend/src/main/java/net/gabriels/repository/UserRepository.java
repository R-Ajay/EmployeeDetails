package net.gabriels.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.gabriels.model.UserDetail;

@Repository
public interface UserRepository extends JpaRepository<UserDetail, Integer>{

}
