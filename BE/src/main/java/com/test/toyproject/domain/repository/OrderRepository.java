package com.test.toyproject.domain.repository;

import com.test.toyproject.domain.item.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
